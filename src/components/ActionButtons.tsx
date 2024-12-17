import React from 'react';

interface ActionButtonsProps {
  onDownload: () => void;
  onCopySVG: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onDownload,
  onCopySVG,
}) => (
  <div className="flex gap-4 justify-center">
    <button
      onClick={onDownload}
      className="px-6 py-3 bg-[#404040] hover:bg-[#505050] rounded font-['Press_Start_2P'] text-xs text-[#FF6B6B] retro-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-[#505050]"
    >
      Download
    </button>
    <button
      onClick={onCopySVG}
      className="px-6 py-3 bg-[#404040] hover:bg-[#505050] rounded font-['Press_Start_2P'] text-xs text-[#FF6B6B] retro-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-[#505050]"
    >
      Copy SVG
    </button>
  </div>
);

