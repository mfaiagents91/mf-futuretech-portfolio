import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MF FutureTech | Web, SEO & AI Automation',
  description: 'Modern websites, search visibility, and AI agents built for ambitious businesses.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
