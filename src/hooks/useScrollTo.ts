import { useCallback } from 'react';

interface ScrollToOptions {
  behavior?: 'auto' | 'smooth';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
}

export function useScrollTo() {
  const scrollToElement = useCallback((
    elementId: string,
    options: ScrollToOptions = { behavior: 'smooth', block: 'start' }
  ) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView(options);
    }
  }, []);

  const scrollToTop = useCallback((behavior: 'auto' | 'smooth' = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, []);

  const scrollToPosition = useCallback((
    x: number,
    y: number,
    behavior: 'auto' | 'smooth' = 'smooth'
  ) => {
    window.scrollTo({
      left: x,
      top: y,
      behavior,
    });
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollToPosition,
  };
}

export default useScrollTo;