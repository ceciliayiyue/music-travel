import React, { useState } from 'react';
import Header from './components/Header';
import GalaxyMap from './components/galaxy/GalaxyMap';
import PlanetDetail from './components/planet/PlanetDetail';
import CosmicPlayer from './components/player/CosmicPlayer';
import LiveScanner from './components/scanner/LiveScanner';
import JourneyTimeline from './components/journey/JourneyTimeline';

// NOTE: This version WIRES UP NAVIGATION + uses built-in Tailwind animations only
// (animate-spin, animate-ping, animate-pulse) so you will SEE changes in Preview.

function MusicCosmosApp() {
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

export default MusicCosmosApp;