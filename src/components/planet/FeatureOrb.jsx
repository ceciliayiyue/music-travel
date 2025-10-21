import React from 'react';

export default function FeatureOrb({ title, desc, onClick }) {
  return (
    <button onClick={onClick} className="p-4 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all shadow-lg text-left">
      <h3 className="text-lg mb-1">{title}</h3>
      <p className="text-xs text-gray-300">{desc}</p >
    </button>
  );
}
