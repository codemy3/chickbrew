import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from './providers'
import FloatingActionButton from '@/components/FloatingActionButton'

export const metadata: Metadata = {
  title: 'chikbrew - Premium Coffee | Direct from Farms',
  description: 'Experience authentic, premium coffee sourced directly from sustainable farms. Arabica, Robusta, and signature blends crafted for coffee lovers.',
  keywords: ['coffee', 'premium coffee', 'arabica', 'robusta', 'specialty coffee'],
  authors: [{ name: 'chikbrew' }],
  openGraph: {
    title: 'chikbrew - Premium Coffee',
    description: 'Experience authentic, premium coffee sourced directly from sustainable farms.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#F9F6F1] text-[#2A1F10]">
        <Providers>
          <Navbar />
          <FloatingActionButton/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
