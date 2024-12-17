# Icon Lab '78 🎮

A retro-themed pixel art icon editor for creating SVG, PNG, and ICO files. Built with React, TypeScript, and Tailwind CSS.

![Icon Lab '78](/icon-lab-78-screen.png)

## Features

- 🎨 Pixel-perfect icon creation
- 📐 16x16 and 32x32 resolution support
- 🎯 Multiple export formats (SVG, PNG, ICO)
- 🌈 Color picker with transparency support
- 📋 Copy SVG code directly to clipboard
- 🧹 Quick canvas clearing

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abishekvenkat/icon-lab-78.git
cd icon-lab-78
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:7125`

## Usage

1. **Select Resolution**: Choose between 16x16 or 32x32 pixel canvas
2. **Choose File Type**: Select your desired export format (SVG, PNG, or ICO)
3. **Pick Colors**: Use the color picker to select your desired color, including transparency
4. **Draw**: Click on pixels to color them
5. **Export**:
   - Click "Download" to save your icon
   - Click "Copy SVG" to copy the SVG code to your clipboard
6. **Clear Canvas**: Use the "Clear Canvas" button to start over

## Project Structure

```
src/
├── components/         # React components
│   ├── ActionButtons.tsx
│   ├── AppHeader.tsx
│   ├── Canvas.tsx
│   ├── ColorPicker.tsx
│   ├── EditorControls.tsx
│   ├── FileTypeSelector.tsx
│   └── ResolutionSelector.tsx
├── hooks/             # Custom React hooks
│   └── useIconEditor.ts
├── utils/             # Utility functions
│   ├── downloadUtils.ts
│   ├── imageUtils.ts
│   └── svgUtils.ts
├── types/             # TypeScript types
│   └── index.ts
├── constants/         # Constants and configurations
│   └── index.ts
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.