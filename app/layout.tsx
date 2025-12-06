import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Navindu Abhishek | Portfolio',
  description: 'Portfolio of Abhishek - A passionate Software Engineering Student crafting digital experiences with code and creativity.',
  keywords: ['software engineer', 'developer', 'portfolio', 'web development', 'frontend', 'backend'],
  authors: [{ name: 'Abhishek' }],
  openGraph: {
    title:  'Navindu Abhishek | Portfolio',
    description: 'Portfolio of Abhishek - A passionate Software Engineering Student crafting digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Load Outfit font from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Load Clash Display from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-accent-cream antialiased">
        {/* Global noise texture overlay */}
        <div 
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
