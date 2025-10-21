import React from 'react';
import FeatureOrb from './FeatureOrb';

export default function PlanetDetail({ city, onBack, onOpenPlayer, onOpenScanner }) {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-black via-gray-900 to-black text-white p-8">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-sm text-gray-300 hover:text-white">← Back</button>
        <h2 className="text-2xl tracking-widest text-center flex-1">{city || 'City'} • VINYL PLANET</h2>
        <div className="w-16" />
      </div>

      <div className="flex justify-center">
        <div className="w-40 h-40 rounded-full animate-spin border-8 border-gray-600 shadow-2xl bg-black" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <FeatureOrb title="Origins" desc="Genre roots, instruments, diaspora" />
        <FeatureOrb title="Trending Signals" desc="What locals play now" />
        <FeatureOrb title="Live Events" desc="Tonight • This week" onClick={onOpenScanner} />
        <FeatureOrb title="Cultural Story" desc="Mythology, icons, rituals" />
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button onClick={onOpenPlayer} className="bg-white text-black py-2 px-6 rounded-full uppercase tracking-wide shadow-xl hover:bg-gray-200">Play City Mix</button>
        <button onClick={onOpenScanner} className="bg-gray-800 text-white py-2 px-6 rounded-full uppercase tracking-wide shadow-xl hover:bg-gray-700">Scan Live Shows</button>
      </div>
    </div>
  );
}
