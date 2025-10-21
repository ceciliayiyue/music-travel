import React from 'react';

function EventComet({ name, location, time }) {
  return (
    <div className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all shadow-lg">
      <p className="text-base">{name}</p>
      <p className="text-xs text-gray-400">{location} • {time}</p>
    </div>
  );
}

export default EventComet;
