import { Resolution, FileType } from '../types';
import { generateSVG } from './svgUtils';
import { generatePNG, generateICO } from './imageUtils';

export const downloadFile = async (
  pixels: string[],
  resolution: Resolution,
  fileType: FileType
) => {
  let blob: Blob;
  let mimeType: string;
  
  switch (fileType) {
    case 'svg':
      blob = new Blob([generateSVG(pixels, resolution)], { type: 'image/svg+xml' });
      mimeType = 'image/svg+xml';
      break;
    case 'png':
      blob = await generatePNG(pixels, resolution);
      mimeType = 'image/png';
      break;
    case 'ico':
      blob = await generateICO(pixels, resolution);
      mimeType = 'image/x-icon';
      break;
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `icon-${resolution}x${resolution}.${fileType}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};