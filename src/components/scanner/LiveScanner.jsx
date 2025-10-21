import React from 'react';
import EventComet from './EventComet';

export default function LiveScanner({ onBack }) {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-black via-gray-900 to-black text-white p-8 flex flex-col items-center">
      <button onClick={onBack} className="self-start text-sm text-gray-300 hover:text-white">← Back</button>
      <h2 className="text-2xl tracking-widest mb-4">LIVE SIGNAL SCANNER</h2>
      <div className="relative w-72 h-72 rounded-full border-4 border-gray-600 shadow-inner">
        <div className="absolute inset-0 rounded-full animate-ping border border-gray-500" />
        <div className="absolute inset-8 rounded-full animate-pulse border border-gray-700" />
        <div className="absolute inset-16 rounded-full border border-gray-800" />
      </div>
      <p className="mt-6 text-gray-400 italic">Scanning nearby music comets...</p >
      <div className="mt-8 space-y-3 w-full max-w-md">
        <EventComet name="Jazz Night" location="Hidden Galaxy Bar" time="Tonight" />
        <EventComet name="Electro Pulse" location="Cosmo Plaza" time="Tomorrow" />
        <EventComet name="Folk Ritual" location="Old Town Stage" time="Fri 9pm" />
      </div>
    </div>
  );
}
