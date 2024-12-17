export const generateSVG = (pixels: string[], resolution: number): string => {
  const pixelSize = 1;
  const svgSize = resolution * pixelSize;
  
  let paths = '';
  pixels.forEach((color, index) => {
    if (color !== 'transparent') {
      const x = (index % resolution) * pixelSize;
      const y = Math.floor(index / resolution) * pixelSize;
      paths += `<rect x="${x}" y="${y}" width="${pixelSize}" height="${pixelSize}" fill="${color}" />`;
    }
  });

  return `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" xmlns="http://www.w3.org/2000/svg">${paths}</svg>`;
};

export const downloadSVG = (pixels: string[], resolution: number) => {
  const svg = generateSVG(pixels, resolution);
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `icon-${resolution}x${resolution}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const copySVGToClipboard = (pixels: string[], resolution: number) => {
  const svg = generateSVG(pixels, resolution);
  navigator.clipboard.writeText(svg);
};