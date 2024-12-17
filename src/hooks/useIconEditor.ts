import { useState, useCallback } from 'react';
import { Resolution, FileType } from '../types';
import { downloadFile } from '../utils/downloadUtils';
import { generateSVG } from '../utils/svgUtils';

export const useIconEditor = () => {
  const [resolution, setResolution] = useState<Resolution>(16);
  const [selectedColor, setSelectedColor] = useState('transparent');
  const [fileType, setFileType] = useState<FileType>('svg');
  const [pixels, setPixels] = useState<string[]>(
    Array(resolution * resolution).fill('transparent')
  );

  const handleResolutionChange = useCallback((newRes: Resolution) => {
    setResolution(newRes);
    setPixels(Array(newRes * newRes).fill('transparent'));
  }, []);

  const handleColorChange = useCallback((color: string) => {
    setSelectedColor(color);
  }, []);

  const handleFileTypeChange = useCallback((type: FileType) => {
    setFileType(type);
  }, []);

  const handlePixelClick = useCallback((index: number) => {
    setPixels((prev) => {
      const newPixels = [...prev];
      newPixels[index] = selectedColor;
      return newPixels;
    });
  }, [selectedColor]);

  const handleClear = useCallback(() => {
    setPixels(Array(resolution * resolution).fill('transparent'));
  }, [resolution]);

  const handleDownload = useCallback(() => {
    downloadFile(pixels, resolution, fileType);
  }, [pixels, resolution, fileType]);

  const handleCopySVG = useCallback(() => {
    const svg = generateSVG(pixels, resolution);
    navigator.clipboard.writeText(svg);
  }, [pixels, resolution]);

  return {
    resolution,
    selectedColor,
    fileType,
    pixels,
    handleResolutionChange,
    handleColorChange,
    handleFileTypeChange,
    handlePixelClick,
    handleClear,
    handleDownload,
    handleCopySVG,
  };
};