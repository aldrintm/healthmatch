import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import {cn}

const fontSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Health Match',
  description: 'Matching You with the Right Care, Instantly.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
