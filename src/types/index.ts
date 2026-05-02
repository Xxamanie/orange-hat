export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  targetAge?: string;
  duration?: string;
  story?: string;
  media: Array<{ type: string; src: string; caption: string }>;
}

