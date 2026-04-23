import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import Problem from '@/components/sections/problem'
import Solution from '@/components/sections/solution'
import HowItWorks from '@/components/sections/how-it-works'
import UseCases from '@/components/sections/use-cases'
import Security from '@/components/sections/security'
import Pricing from '@/components/sections/pricing'
import Testimonials from '@/components/sections/testimonials'
import FinalCta from '@/components/sections/final-cta'
import FaqSection, { homeFaqs } from '@/components/sections/faq'
import Footer from '@/components/footer'
import StructuredData from '@/components/seo/structured-data'
import { absoluteUrl, siteDescription, siteName, siteOgImage, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Private AI Assistant for Dental Practices & Accounting Firms',
  description: siteDescription,
  keywords: [
    'private AI assistant',
    'on-premises AI assistant',
    'AI for dental practices',
    'AI for accounting firms',
    'document search AI',
    'private AI for business',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Private AI Assistant for Dental Practices & Accounting Firms | Boston AI Help',
    description: siteDescription,
    url: absoluteUrl('/'),
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
    title: 'Private AI Assistant for Dental Practices & Accounting Firms | Boston AI Help',
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
    logo: absoluteUrl(siteOgImage),
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
      'Private, on-premises AI assistants for dental practices and accounting firms that need secure access to internal documents without using the cloud.',
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
        <Testimonials />
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
    </>
  )
}
