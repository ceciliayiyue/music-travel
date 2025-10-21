import React from 'react';

export default function Planet({ x, y, name, vibe, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: x, top: y }}
      aria-label={`Open ${name}`}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute w-28 h-28 rounded-full border border-gray-700 animate-ping opacity-30" />
        <div className="w-24 h-24 rounded-full border-4 border-gray-400 group-hover:border-white transition-all animate-spin bg-gradient-to-br from-gray-700 to-black shadow-2xl" />
      </div>
      <p className="text-base mt-2 tracking-wide text-center">{name}</p >
      <p className="text-xs text-gray-400 italic text-center">{vibe}</p >
    </button>
  );
}
