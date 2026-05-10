import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import Problem from '@/components/sections/problem'
import Solution from '@/components/sections/solution'
import HowItWorks from '@/components/sections/how-it-works'
import UseCases from '@/components/sections/use-cases'
import Security from '@/components/sections/security'
import Pricing from '@/components/sections/pricing'
import FinalCta from '@/components/sections/final-cta'
import FaqSection, { homeFaqs } from '@/components/sections/faq'
import Footer from '@/components/footer'
import StructuredData from '@/components/seo/structured-data'
import {
  absoluteUrl,
  siteDescription,
  siteKeywords,
  siteLogo,
  siteName,
  siteOgImage,
  siteTitle,
  siteUrl,
} from '@/lib/site'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: absoluteUrl('/'),
    siteName,
    type: 'website',
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} social preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [siteOgImage],
  },
}

const homeSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl(siteLogo),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: 'en-US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private AI Assistant Installation',
    serviceType: 'On-premises AI assistant deployment',
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    url: absoluteUrl('/'),
    description:
      'Private, on-premises AI assistants for dental practices that need secure access to patient records and internal documents without using the cloud.',
    areaServed: 'US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  },
]

export default function HomePage() {
  return (
    <>
      <StructuredData data={homeSchemas} />
      <main>
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <UseCases />
        <Security />
        <Pricing />
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
    </>
  )
}
