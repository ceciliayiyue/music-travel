import React from 'react';

function TrackRow({ title, artist, length, active }) {
  return (
    <div className={`p-3 rounded-xl border ${active ? 'border-white bg-white/10' : 'border-gray-700 bg-gray-900'} flex items-center justify-between`}>
      <div>
        <p className="text-sm">{title}</p>
        <p className="text-xs text-gray-400">{artist}</p>
      </div>
      <span className="text-xs text-gray-400">{length}</span>
    </div>
  );
}

export default TrackRow;
