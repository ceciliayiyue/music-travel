import React from 'react';

export default function JourneyNode({ city, achievement }) {
  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-xl shadow-lg">
      <h3 className="text-lg">{city}</h3>
      <p className="text-xs text-gray-400">{achievement}</p >
    </div>
  );
}
