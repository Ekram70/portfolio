import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Md. Ekram Ullah - Full Stack Developer',
  description:
    'Full Stack Developer specializing in Angular, TypeScript, React and Next.js, with NestJS, Laravel and MySQL on the backend. I own features end to end — requirements, design, implementation, tests, and release.',
  keywords:
    'Full Stack Developer, Angular, TypeScript, React, Next.js, NestJS, Laravel, MySQL, Playwright, Vitest, Web Development, Portfolio',
  authors: [{ name: 'Md. Ekram Ullah' }],
  creator: 'Md. Ekram Ullah',
  openGraph: {
    title: 'Md. Ekram Ullah - Full Stack Developer',
    description:
      'Full Stack Developer specializing in Angular, TypeScript and React — owning features end to end, from requirements to release.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Ekram Ullah - Full Stack Developer',
    description:
      'Full Stack Developer specializing in Angular, TypeScript and React — owning features end to end, from requirements to release.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
