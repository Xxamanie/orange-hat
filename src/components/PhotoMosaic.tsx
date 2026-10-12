import { useEffect, useMemo, useRef, useState } from 'react';

// Public assets stay at their original URLs; adding a photograph includes it next build.
const discoveredPhotos = import.meta.glob<string>(
  ['/public/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', '!/public/images/logo.*', '!/public/images/partners.*'],
  { eager: true, query: '?url', import: 'default' },
);
const photos = Object.entries(discoveredPhotos)
  .filter(([path]) => !/(?:^|\/)(?:logo[^/]*|partners\.[^/]+)$/i.test(path))
  .map(([, url]) => url);
const shuffle = <T,>(items: T[]): T[] => {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
};

interface TileImage { current: string; incoming?: string; }

export function PhotoMosaic({ initialImage }: { initialImage: string }) {
  const wallRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ columns: 4, count: 12 });
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const [onScreen, setOnScreen] = useState(true);
  const catalog = useMemo(() => {
    const publicPath = initialImage.slice(import.meta.env.BASE_URL.length).replace(/^\//, '');
    const preferred = discoveredPhotos[`/public/${decodeURIComponent(publicPath)}`] ?? initialImage;
    return [...new Set([preferred, ...shuffle(photos)])];
  }, [initialImage]);
  const [tiles, setTiles] = useState<TileImage[]>([]);
  const tilesRef = useRef<TileImage[]>([]);
  const failedRef = useRef(new Set<string>());
  const deckRef = useRef<string[]>([]);
  const active = !paused && !reducedMotion && visible && onScreen;

  useEffect(() => {
    const element = wallRef.current;
    if (!element) return;
    const measure = () => {
      const { width, height } = element.getBoundingClientRect();
      if (!width || !height) return;
      const columns = width < 600 ? 2 : width < 1000 ? 4 : Math.min(7, Math.ceil(width / 270));
      const size = (width - (columns - 1) * 4) / columns;
      const count = columns * Math.ceil((height + 4) / (size + 4));
      setLayout(previous => previous.columns === columns && previous.count === count ? previous : { columns, count });
    };
    const resize = new ResizeObserver(measure);
    resize.observe(element);
    const intersection = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    intersection.observe(element);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionChanged = () => setReducedMotion(preference.matches);
    const visibilityChanged = () => setVisible(!document.hidden);
    motionChanged();
    visibilityChanged();
    measure();
    preference.addEventListener('change', motionChanged);
    document.addEventListener('visibilitychange', visibilityChanged);
    return () => {
      resize.disconnect();
      intersection.disconnect();
      preference.removeEventListener('change', motionChanged);
      document.removeEventListener('visibilitychange', visibilityChanged);
    };
  }, []);

  useEffect(() => {
    failedRef.current.clear();
    deckRef.current = shuffle(catalog);
    const next = Array.from({ length: layout.count }, (_, index) => ({ current: catalog[index % catalog.length] }));
    tilesRef.current = next;
    setTiles(next);
  }, [catalog, layout.count]);

  const replaceTile = (index: number, tile: TileImage) => {
    tilesRef.current = tilesRef.current.map((previous, tileIndex) => tileIndex === index ? tile : previous);
    setTiles(tilesRef.current);
  };

  const choosePhoto = (index: number): string | undefined => {
    const tile = tilesRef.current[index];
    const available = catalog.filter(url => !failedRef.current.has(url) && url !== tile?.current);
    if (!available.length) return undefined;
    const displayed = new Set(tilesRef.current.flatMap(item => [item.current, ...(item.incoming ? [item.incoming] : [])]));
    const unused = available.filter(url => !displayed.has(url));
    const candidates = unused.length ? unused : available;
    let selected = deckRef.current.find(url => candidates.includes(url));
    if (!selected) {
      deckRef.current = shuffle(catalog);
      selected = deckRef.current.find(url => candidates.includes(url));
    }
    if (selected) deckRef.current = deckRef.current.filter(url => url !== selected);
    return selected;
  };

  useEffect(() => {
    if (!active || !tilesRef.current.length || catalog.length < 2) return;
    let disposed = false;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const loading = new Set<HTMLImageElement>();
    const later = (callback: () => void, delay: number) => {
      const timer = setTimeout(() => { timers.delete(timer); if (!disposed) callback(); }, delay);
      timers.add(timer);
    };
    const rotate = (index: number) => {
      const source = choosePhoto(index);
      if (!source) { later(() => rotate(index), 250); return; }
      const image = new Image();
      loading.add(image);
      const release = () => {
        loading.delete(image);
        image.onload = null;
        image.onerror = null;
      };
      image.onload = () => {
        release();
        if (disposed) return;
        replaceTile(index, { current: tilesRef.current[index].current, incoming: source });
        later(() => {
          replaceTile(index, { current: source });
          later(() => rotate(index), 60 + Math.random() * 100);
        }, 150);
      };
      image.onerror = () => {
        release();
        failedRef.current.add(source);
        later(() => rotate(index), 1000);
      };
      image.src = source;
    };
    tilesRef.current.forEach((_, index) => later(() => rotate(index), Math.random() * 250));
    return () => {
      disposed = true;
      timers.forEach(clearTimeout);
      loading.forEach(image => { image.onload = null; image.onerror = null; image.src = ''; });
      // Keep the fully loaded layer when pausing halfway through a fade.
      tilesRef.current = tilesRef.current.map(tile => ({ current: tile.incoming ?? tile.current }));
      setTiles(tilesRef.current);
    };
  }, [active, catalog, layout.count]);

  return (
    <>
      <div ref={wallRef} className="photo-mosaic" aria-hidden="true">
        <div className="photo-mosaic-grid" style={{ gridTemplateColumns: `repeat(${layout.columns}, minmax(0, 1fr))` }}>
          {tiles.map((tile, index) => (
            <div className="photo-mosaic-tile" key={index}>
              <img src={tile.current} alt="" decoding="async" onError={() => {
                failedRef.current.add(tile.current);
                const replacement = choosePhoto(index);
                if (replacement) replaceTile(index, { current: replacement });
              }} />
              {tile.incoming && <img className="photo-mosaic-incoming" src={tile.incoming} alt="" decoding="async" />}
            </div>
          ))}
        </div>
      </div>
      {!reducedMotion && catalog.length > 1 && (
        <button className="photo-mosaic-control" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
          {paused ? 'Play photos' : 'Pause photos'}
        </button>
      )}
    </>
  );
}
