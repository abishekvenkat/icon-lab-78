import React, { useCallback } from 'react';

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onColorChange }) => {
  const handleColorChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(e.target.value);
  }, [onColorChange]);

  const handleTransparentClick = useCallback(() => {
    onColorChange('transparent');
  }, [onColorChange]);

  return (
    <div className="bg-[#1A082B] p-4 rounded-lg retro-shadow">
      <h2 className="font-['Press_Start_2P'] text-sm mb-4 text-[#FC2F9C]">Color</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <input
            type="color"
            value={selectedColor === 'transparent' ? '#000000' : selectedColor}
            onChange={handleColorChange}
            className="w-12 h-12 rounded cursor-pointer"
            style={{
              backgroundColor: selectedColor ,
            }}
          />
         
          <span className="font-['Press_Start_2P'] text-xs text-[#03FFFF]">
            {selectedColor === 'transparent' ? 'Transparent' : selectedColor.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2 ">
          
          <button
            onClick={handleTransparentClick}
            className={`px-4 py-2 font-['Press_Start_2P'] text-xs ${
              selectedColor === 'transparent' ? 'bg-[#6B1C7F]' : 'bg-[#4A1259]'
            } hover:bg-[#6B1C7F] rounded text-[#03FFFF] retro-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`}
          >
            Pick Transparent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;