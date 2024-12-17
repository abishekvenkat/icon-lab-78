import React from 'react';
import { Gamepad } from 'lucide-react';

export const AppHeader: React.FC = () => (
  <header className="flex items-center justify-center gap-4 mb-8">
    <Gamepad className="w-8 h-8 text-[#66FF66]" />
    <h1 className="font-['Press_Start_2P'] text-2xl text-center text-[#66FF66]">
      Icon Lab '78
    </h1>
  </header>
);