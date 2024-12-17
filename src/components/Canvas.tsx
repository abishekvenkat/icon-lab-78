import React from 'react';

interface CanvasProps {
  resolution: 16 | 32;
  pixels: string[];
  onPixelClick: (index: number) => void;
}

const Canvas: React.FC<CanvasProps> = ({ resolution, pixels, onPixelClick }) => {
  const pixelSize = resolution === 16 ? 20 : 12;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div
        className="grid gap-[1px] bg-gray-200 p-[1px]"
        style={{
          gridTemplateColumns: `repeat(${resolution}, ${pixelSize}px)`,
          width: 'fit-content',
          margin: '0 auto',
        }}
      >
        {pixels.map((color, index) => (
          <div
            key={index}
            onClick={() => onPixelClick(index)}
            style={{
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
              backgroundColor: color,
              backgroundImage: color === 'transparent' 
                ? 'linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)'
                : 'none',
              backgroundSize: '8px 8px',
              backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
            }}
            className="cursor-pointer hover:opacity-90 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
};

export default Canvas;