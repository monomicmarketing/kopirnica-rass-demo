import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RASS - Kopirnica, kljucevi i pecati | Sarajevo',
  description: 'Nezvanicni demonstracijski koncept za RASS na Trgu ZAVNOBiH-a 26 u Sarajevu. Kopirnica, izrada kljuceva i pecata.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="bs"><body>{children}</body></html>;
}

