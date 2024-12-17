export type Resolution = 16 | 32;
export type FileType = 'png' | 'ico';

export interface PixelData {
  pixels: string[];
  resolution: Resolution;
}