import React from 'react';
import TrackRow from './TrackRow';

function CosmicPlayer({ onBack, city }) {
  return (
    <div className="min-h-[80vh] bg-black text-white flex flex-col items-center justify-center p-6">
      <button onClick={onBack} className="absolute left-4 top-20 text-sm text-gray-300 hover:text-white">← Back</button>
      <div className="w-64 h-64 rounded-full border-8 border-gray-600 animate-spin bg-gradient-to-br from-gray-700 to-black shadow-2xl" />
      <h2 className="mt-6 text-2xl tracking-widest">COSMIC TURNTABLE</h2>
      <p className="text-sm text-gray-400 mb-6 italic">Now playing: {city || 'City'} Essentials</p>

      <div className="w-full max-w-md space-y-2 text-sm">
        <TrackRow title="Intro: Stellar Overture" artist="Various" length="1:21" active />
        <TrackRow title="Night Alleys" artist="Local Artist" length="3:42" />
        <TrackRow title="Heritage Echo" artist="Ensemble" length="4:05" />
        <TrackRow title="Club Pulse" artist="DJ Nova" length="2:57" />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button className="bg-white text-black py-2 px-6 rounded-full uppercase tracking-wide shadow-xl hover:bg-gray-200">Play / Pause</button>
        <button className="bg-gray-800 text-white py-2 px-6 rounded-full uppercase tracking-wide shadow-xl hover:bg-gray-700">Add to Journey</button>
      </div>
    </div>
  );
}

export default CosmicPlayer;
