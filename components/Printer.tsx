'use client';
import { useEffect, useState } from 'react';

export default function Printer() {
  const [run, setRun] = useState(0);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return <div className="print-wrap">
    <div className="print-scene" key={`${run}-${reduced}`} role="img" aria-label="Printer stampa papir s nazivom RASS i tri djelatnosti">
      <div className="scene-grid"/><div className="ground-shadow"/>
      <div className="machine">
        <div className="machine-back"/><div className="machine-top"><div className="top-inset"/></div>
        <div className="machine-front">
          <div className="control"><i/><span>R / 01</span><b>PRINT</b></div>
          <div className="feed-slot"/>
          <div className="feed-window"><div className="print-paper"><div className="paper-grain"/><div className="printed-content"><span className="paper-overline">SARAJEVO / TRG ZAVNOBIH-A 26</span><strong>RASS<span>.</span></strong><span className="paper-divider"/><span className="paper-subline">KOPIRNICA<br/>KLJUCEVI � PECATI</span><span className="paper-code">01 - 03 / SVAKI DAN PRI RUCI</span></div></div></div>
          <div className="slot-lip"/><div className="front-label">PRECIZNO. PRAKTICNO. BLIZU.</div>
        </div><div className="machine-base"/>
      </div>
      <div className="scene-index">01 / 03 <span>RASS � SARAJEVO</span></div>
    </div>
    {!reduced && <button className="replay" type="button" onClick={() => setRun(v => v + 1)} aria-label="Ponovi animaciju stampanja"><span aria-hidden="true">?</span> Ponovi ispis</button>}
  </div>;
}

