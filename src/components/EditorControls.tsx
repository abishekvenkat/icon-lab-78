import React from 'react';
import { Resolution, FileType } from '../types';
import ResolutionSelector from './ResolutionSelector';
import FileTypeSelector from './FileTypeSelector';
import ColorPicker from './ColorPicker';

interface EditorControlsProps {
  resolution: Resolution;
  selectedColor: string;
  fileType: FileType;
  onResolutionChange: (resolution: Resolution) => void;
  onColorChange: (color: string) => void;
  onFileTypeChange: (type: FileType) => void;
  onClear: () => void;
}

export const EditorControls: React.FC<EditorControlsProps> = ({
  resolution,
  selectedColor,
  fileType,
  onResolutionChange,
  onColorChange,
  onFileTypeChange,
  onClear,
}) => (
  <div className="space-y-6">
    <ResolutionSelector
      resolution={resolution}
      onResolutionChange={onResolutionChange}
    />
    <FileTypeSelector
      selectedType={fileType}
      onTypeChange={onFileTypeChange}
    />
    <ColorPicker
      selectedColor={selectedColor}
      onColorChange={onColorChange}
    />
    <button
      onClick={onClear}
      className="w-full px-4 py-2 bg-[#404040] hover:bg-[#505050] rounded font-['Press_Start_2P'] text-xs text-[#40E0D0] retro-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:bg-[#505050]"
    >
      Clear Canvas
    </button>
  </div>
);