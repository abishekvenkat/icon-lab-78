import { Resolution, FileType } from '../types';

const createCanvas = (pixels: string[], resolution: Resolution): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = resolution;
  canvas.height = resolution;
  const ctx = canvas.getContext('2d')!;
  
  pixels.forEach((color, index) => {
    if (color !== 'transparent') {
      const x = index % resolution;
      const y = Math.floor(index / resolution);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  });
  
  return canvas;
};

export const generatePNG = async (pixels: string[], resolution: Resolution): Promise<Blob> => {
  const canvas = createCanvas(pixels, resolution);
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), 'image/png');
  });
};

export const generateICO = async (pixels: string[], resolution: Resolution): Promise<Blob> => {
  const canvas = createCanvas(pixels, resolution);
  
  // Convert canvas to BMP format
  const imageData = canvas.getContext('2d')!.getImageData(0, 0, resolution, resolution);
  const bmpData = createBMPFromImageData(imageData);
  
  // Create ICO header
  const header = new Uint8Array([
    0, 0,             // Reserved
    1, 0,             // ICO type
    1, 0,             // Number of images
    resolution,       // Width
    resolution,       // Height
    0,                // Color palette
    0,                // Reserved
    1, 0,             // Color planes
    32, 0,            // Bits per pixel
    bmpData.length, 0, 0, 0,  // Size of BMP data
    22, 0, 0, 0      // Offset to BMP data
  ]);

  // Combine header and BMP data
  const icoData = new Uint8Array(header.length + bmpData.length);
  icoData.set(header);
  icoData.set(bmpData, header.length);

  return new Blob([icoData], { type: 'image/x-icon' });
};

function createBMPFromImageData(imageData: ImageData): Uint8Array {
  const width = imageData.width;
  const height = imageData.height;
  const bmpSize = 54 + width * height * 4; // 54 bytes header + pixel data
  const data = new Uint8Array(bmpSize);
  
  // BMP Header
  data.set([0x42, 0x4D]); // Signature
  setDWord(data, 2, bmpSize); // File size
  setDWord(data, 10, 54); // Pixel data offset
  setDWord(data, 14, 40); // DIB header size
  setDWord(data, 18, width);
  setDWord(data, 22, height);
  setWord(data, 26, 1); // Color planes
  setWord(data, 28, 32); // Bits per pixel
  setDWord(data, 30, 0); // No compression
  
  // Pixel data
  let offset = 54;
  for (let y = height - 1; y >= 0; y--) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      data[offset++] = imageData.data[i + 2]; // Blue
      data[offset++] = imageData.data[i + 1]; // Green
      data[offset++] = imageData.data[i]; // Red
      data[offset++] = imageData.data[i + 3]; // Alpha
    }
  }
  
  return data;
}

function setWord(data: Uint8Array, offset: number, value: number) {
  data[offset] = value & 0xFF;
  data[offset + 1] = (value >> 8) & 0xFF;
}

function setDWord(data: Uint8Array, offset: number, value: number) {
  for (let i = 0; i < 4; i++) {
    data[offset + i] = (value >> (i * 8)) & 0xFF;
  }
}