import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LocalMind AI — Private AI for Dentists & Accountants',
  description:
    'We install a private AI assistant in your office that understands your patient files, financial records, and internal documents — instantly. Your data never leaves your office.',
  keywords: [
    'on-premises AI',
    'private AI',
    'dental AI assistant',
    'accounting AI assistant',
    'HIPAA AI',
    'document search AI',
    'local AI',
  ],
  openGraph: {
    title: 'LocalMind AI — Private AI for Dentists & Accountants',
    description:
      'Your Documents. Now Searchable with AI. On-premise, private, secure.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
