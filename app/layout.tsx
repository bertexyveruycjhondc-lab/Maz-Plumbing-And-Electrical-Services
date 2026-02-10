import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Maz Plumbing & Electrical | Elite Services',
  description: 'Exquisite precision in every connection. Elevating home maintenance to an art form with unparalleled plumbing and electrical mastery.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  generator: 'v0.app',
  themeColor: '#0a192f',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #0a192f;
          }
          ::-webkit-scrollbar-thumb {
            background: #233554;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #ffd166;
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
