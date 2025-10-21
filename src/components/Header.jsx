import React from 'react';

function Header({ onNav }) {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur">
      <h1 className="text-xl tracking-widest">MUSIC COSMOS</h1>
      <nav className="space-x-4 text-sm uppercase">
        <button className="hover:text-gray-300" onClick={() => onNav('map')}>Explore</button>
        <button className="hover:text-gray-300" onClick={() => onNav('journey')}>My Journey</button>
      </nav>
    </header>
  );
}

export default Header;
