import React from 'react';
import Starfield from './Starfield';
import Planet from './Planet';

function GalaxyMap({ onSelectCity }) {
  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <Starfield />
      <div className="absolute animate-pulse text-gray-400 text-xs top-6">PINCH / SCROLL TO ZOOM • DRAG TO EXPLORE</div>
      <div className="relative w-full h-full">
        {/* Planets */}
        <Planet x="25%" y="32%" name="Tokyo" vibe="Electro-Jazz" onClick={() => onSelectCity('Tokyo')} />
        <Planet x="65%" y="48%" name="Barcelona" vibe="Flamenco House" onClick={() => onSelectCity('Barcelona')} />
        <Planet x="38%" y="72%" name="New Orleans" vibe="Jazz Roots" onClick={() => onSelectCity('New Orleans')} />
        <Planet x="75%" y="22%" name="Seoul" vibe="K‑Indie / City Pop" onClick={() => onSelectCity('Seoul')} />
        <Planet x="15%" y="58%" name="Lagos" vibe="Afrobeats" onClick={() => onSelectCity('Lagos')} />
      </div>
    </section>
  );
}

export default GalaxyMap;
