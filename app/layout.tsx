import type { Metadata } from 'next';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/ibm-plex-sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'RASS — Kopirnica, ključevi i pečati | Sarajevo',
  description: 'Nezvanični demonstracijski koncept za RASS na Trgu ZAVNOBiH-a 26 u Sarajevu. Kopirnica, izrada ključeva i pečata.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="bs"><body>{children}</body></html>;
}
