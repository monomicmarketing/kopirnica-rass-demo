'use client';
import { useEffect, useRef, useState } from 'react';
import { business } from '../business';

const links = [['Usluge', '#usluge'], ['Cijene i upiti', '#upiti'], ['Lokacija', '#lokacija']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 700px)');
    const closeOnDesktop = () => { if (!mobile.matches) setOpen(false); };
    mobile.addEventListener('change', closeOnDesktop);
    return () => mobile.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const followLink = (href: string) => {
    setOpen(false);
    // Give focus a visible destination before the closed navigation becomes inert.
    requestAnimationFrame(() => document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true }));
  };

  return <>
    <div className="demo-strip">NEZVANIČNI DEMONSTRACIJSKI KONCEPT <span>· Stranica nije službeni kanal radnje RASS</span></div>
    <header className="site-header shell">
      <a className="brand" href="#pocetna" aria-label="RASS, na početak" onClick={() => setOpen(false)}><span className="brand-square">R<span>.</span></span><span className="brand-name">RASS<small>PRINT / KLJUČ / PEČAT</small></span></a>
      <nav className="desktop-nav" aria-label="Glavna navigacija">{links.map(([name, href]) => <a href={href} key={href}>{name}</a>)}</nav>
      <div className="header-right"><a className="header-call" href={`tel:${business.phoneHref}`}>{business.phone} <span aria-hidden="true">↗</span></a><button ref={menuButton} className={`menu-button ${open ? 'active' : ''}`} type="button" aria-label={open ? 'Zatvori meni' : 'Otvori meni'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(value => !value)}><i/><i/></button></div>
    </header>
    <nav id="mobile-nav" className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobilna navigacija" inert={!open}>{links.map(([name, href], i) => <a key={href} href={href} onClick={() => followLink(href)}><span>0{i + 1}</span>{name}<b aria-hidden="true">↗</b></a>)}</nav>
  </>;
}
