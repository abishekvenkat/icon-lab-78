import React from 'react';
import { Resolution } from '../types';

interface ResolutionSelectorProps {
  resolution: Resolution;
  onResolutionChange: (resolution: Resolution) => void;
}

const ResolutionSelector: React.FC<ResolutionSelectorProps> = ({
  resolution,
  onResolutionChange,
}) => {
  return (
    <div className="bg-[#1A082B] p-4 rounded-lg retro-shadow">
      <h2 className="font-['Press_Start_2P'] text-sm mb-4 text-[#FC2F9C]">Resolution</h2>
      <div className="flex gap-4">
        <button
          onClick={() => onResolutionChange(16)}
          className={`px-4 py-2 font-['Press_Start_2P'] text-xs ${
            resolution === 16 ? 'bg-[#6B1C7F]' : 'bg-[#4A1259]'
          } hover:bg-[#6B1C7F] rounded text-[#03FFFF] retro-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`}
        >
          16x16
        </button>
        <button
          onClick={() => onResolutionChange(32)}
          className={`px-4 py-2 font-['Press_Start_2P'] text-xs ${
            resolution === 32 ? 'bg-[#6B1C7F]' : 'bg-[#4A1259]'
          } hover:bg-[#6B1C7F] rounded text-[#03FFFF] retro-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`}
        >
          32x32
        </button>
      </div>
    </div>
  );
};

export default ResolutionSelector;