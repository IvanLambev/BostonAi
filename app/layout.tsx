import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { absoluteUrl, siteDescription, siteName, siteOgImage, siteUrl } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Private AI Assistant for Dental Practices',
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  icons: {
    icon: '/Boston%20ai%20help-favicon.png',
    shortcut: '/Boston%20ai%20help-favicon.png',
    apple: '/Boston%20ai%20help-favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Private AI Assistant for Dental Practices',
    description: siteDescription,
    url: absoluteUrl('/'),
    siteName,
    type: 'website',
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private AI Assistant for Dental Practices',
    description: siteDescription,
    images: [siteOgImage],
  },
}

export const viewport: Viewport = {
  themeColor: '#f6f8fc',
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
