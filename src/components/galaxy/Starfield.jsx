import React from 'react';

function Starfield() {
  return (
    <div className="absolute inset-0">
      {/* simple starfield dots */}
      <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08)_0,transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06)_0,transparent_45%)]" />
    </div>
  );
}

export default Starfield;
