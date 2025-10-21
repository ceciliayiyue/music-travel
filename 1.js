import React, { useState } from 'react';

// NOTE: This version WIRES UP NAVIGATION + uses built-in Tailwind animations only
// (animate-spin, animate-ping, animate-pulse) so you will SEE changes in Preview.

export default function MusicCosmosApp() {
  const [view, setView] = useState('map'); // 'map' | 'detail' | 'player' | 'scanner' | 'journey'
  const [city, setCity] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header onNav={setView} />

      {view === 'map' && (
        <GalaxyMap
          onSelectCity={(c) => {
            setCity(c);
            setView('detail');
          }}
        />
      )}

      {view === 'detail' && (
        <PlanetDetail
          city={city}
          onBack={() => setView('map')}
          onOpenPlayer={() => setView('player')}
          onOpenScanner={() => setView('scanner')}
        />
      )}

      {view === 'player' && <CosmicPlayer onBack={() => setView('detail')} city={city} />}

      {view === 'scanner' && <LiveScanner onBack={() => setView('detail')} />}

      {view === 'journey' && <JourneyTimeline onBack={() => setView('map')} />}
    </div>
  );
}

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

// --------------- HOME: GALAXY MAP ---------------
function GalaxyMap({ onSelectCity }) {
  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <Starfield />
      <div className="absolute animate-pulse text-gray-400 text-xs top-6">PINCH / SCROLL TO ZOOM • DRAG TO EXPLORE</div>
      <div className="relative w-full h-full">
        {/* Planets */}
        <Planet x="25%" y="32%" name="Tokyo" vibe="Electro-Jazz" onClick={() => onSelectCity('Tokyo')} />
        <Planet x="65%" y="48%" name="Barcelona" vibe="Flamenco House" onClick={() => onSelectCity('Barcelona')} />
        <Planet x="38%" y="72%" name="New Orleans" vibe="Jazz Roots" onClick={() => onSelectCity('New Orleans')} />
        <Planet x="75%" y="22%" name="Seoul" vibe="K‑Indie / City Pop" onClick={() => onSelectCity('Seoul')} />
        <Planet x="15%" y="58%" name="Lagos" vibe="Afrobeats" onClick={() => onSelectCity('Lagos')} />
      </div>
    </section>
  );
}

function Starfield() {
  return (
    <div className="absolute inset-0">
      {/* simple starfield dots */}
      <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08)_0,transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06)_0,transparent_45%)]" />
    </div>
  );
}

function Planet({ x, y, name, vibe, onClick }) {
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

// --------------- DETAIL: PLANET VIEW ---------------
function PlanetDetail({ city, onBack, onOpenPlayer, onOpenScanner }) {
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

function FeatureOrb({ title, desc, onClick }) {
  return (
    <button onClick={onClick} className="p-4 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all shadow-lg text-left">
      <h3 className="text-lg mb-1">{title}</h3>
      <p className="text-xs text-gray-300">{desc}</p >
    </button>
  );
}

// --------------- PLAYER ---------------
function CosmicPlayer({ onBack, city }) {
  return (
    <div className="min-h-[80vh] bg-black text-white flex flex-col items-center justify-center p-6">
      <button onClick={onBack} className="absolute left-4 top-20 text-sm text-gray-300 hover:text-white">← Back</button>
      <div className="w-64 h-64 rounded-full border-8 border-gray-600 animate-spin bg-gradient-to-br from-gray-700 to-black shadow-2xl" />
      <h2 className="mt-6 text-2xl tracking-widest">COSMIC TURNTABLE</h2>
      <p className="text-sm text-gray-400 mb-6 italic">Now playing: {city || 'City'} Essentials</p >

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

function TrackRow({ title, artist, length, active }) {
  return (
    <div className={`p-3 rounded-xl border ${active ? 'border-white bg-white/10' : 'border-gray-700 bg-gray-900'} flex items-center justify-between`}>
      <div>
        <p className="text-sm">{title}</p >
        <p className="text-xs text-gray-400">{artist}</p >
      </div>
      <span className="text-xs text-gray-400">{length}</span>
    </div>
  );
}

// --------------- LIVE SCANNER ---------------
function LiveScanner({ onBack }) {
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

function EventComet({ name, location, time }) {
  return (
    <div className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all shadow-lg">
      <p className="text-base">{name}</p >
      <p className="text-xs text-gray-400">{location} • {time}</p >
    </div>
  );
}

// --------------- JOURNEY ---------------
function JourneyTimeline({ onBack }) {
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

function JourneyNode({ city, achievement }) {
  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-xl shadow-lg">
      <h3 className="text-lg">{city}</h3>
      <p className="text-xs text-gray-400">{achievement}</p >
    </div>
  );
}