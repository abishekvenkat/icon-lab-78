import React from 'react';
import Canvas from './components/Canvas';
import { useIconEditor } from './hooks/useIconEditor';
import { AppHeader } from './components/AppHeader';
import { EditorControls } from './components/EditorControls';
import { ActionButtons } from './components/ActionButtons';

const App: React.FC = () => {
  const {
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
  } = useIconEditor();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <AppHeader />

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <EditorControls
            resolution={resolution}
            selectedColor={selectedColor}
            fileType={fileType}
            onResolutionChange={handleResolutionChange}
            onColorChange={handleColorChange}
            onFileTypeChange={handleFileTypeChange}
            onClear={handleClear}
          />

          <div className="space-y-6">
            <Canvas
              resolution={resolution}
              pixels={pixels}
              onPixelClick={handlePixelClick}
            />

            <ActionButtons
              onDownload={handleDownload}
              onCopySVG={handleCopySVG}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;