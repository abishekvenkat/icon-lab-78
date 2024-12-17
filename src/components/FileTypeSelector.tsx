import React from 'react';
import { FileType } from '../types';
import { FILE_TYPES } from '../constants';

interface FileTypeSelectorProps {
  selectedType: FileType;
  onTypeChange: (type: FileType) => void;
}

const FileTypeSelector: React.FC<FileTypeSelectorProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="bg-[#1A082B] p-4 rounded-lg retro-shadow">
      <h2 className="font-['Press_Start_2P'] text-sm mb-4 text-[#FC2F9C]">File Type</h2>
      <div className="flex gap-4">
        {FILE_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type as FileType)}
            className={`px-4 py-2 font-['Press_Start_2P'] text-xs ${
              selectedType === type ? 'bg-[#6B1C7F]' : 'bg-[#4A1259]'
            } hover:bg-[#6B1C7F] rounded uppercase text-[#03FFFF] retro-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FileTypeSelector;