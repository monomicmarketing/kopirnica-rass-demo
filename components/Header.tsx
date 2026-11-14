'use client';
import { useState } from 'react';
import { business } from '../business';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Usluge','#usluge'],['Cijene i upiti','#upiti'],['Lokacija','#lokacija']];
  return <><div className="demo-strip">NEZVANIČNI DEMONSTRACIJSKI KONCEPT <span>· Stranica nije službeni kanal radnje RASS</span></div><header className="site-header shell"><a className="brand" href="#pocetna" aria-label="RASS, na početak"><span className="brand-square">R<span>·</span></span><span className="brand-name">RASS<small>PRINT / KLJUČ / PEČAT</small></span></a><nav className="desktop-nav" aria-label="Glavna navigacija">{links.map(([name,href]) => <a href={href} key={href}>{name}</a>)}</nav><div className="header-right"><a className="header-call" href={`tel:${business.phoneHref}`}>+387 61 253 059 <span aria-hidden="true">↗</span></a><button className={`menu-button ${open?'active':''}`} type="button" aria-label={open?'Zatvori meni':'Otvori meni'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}><i/><i/></button></div></header><nav id="mobile-nav" className={`mobile-nav ${open?'open':''}`} aria-label="Mobilna navigacija" inert={!open}>{links.map(([name,href],i) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{i+1}</span>{name}<b aria-hidden="true">↗</b></a>)}</nav></>;
}
