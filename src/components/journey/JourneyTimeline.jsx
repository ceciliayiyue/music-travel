import React from 'react';
import JourneyNode from './JourneyNode';

export default function JourneyTimeline({ onBack }) {
  return (
    <div className="min-h-[80vh] bg-black text-white p-8">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-sm text-gray-300 hover:text-white">← Back</button>
        <h2 className="text-2xl tracking-widest text-center flex-1">MY COSMIC JOURNEY</h2>
        <div className="w-16" />
      </div>
      <div className="space-y-4 max-w-xl mx-auto">
        <JourneyNode city="Tokyo" achievement="Unlocked Electro-Jazz Lore" />
        <JourneyNode city="Barcelona" achievement="Joined Flamenco Pulse Event" />
        <JourneyNode city="New Orleans" achievement="Discovered Jazz Origins" />
      </div>
    </div>
  );
}
