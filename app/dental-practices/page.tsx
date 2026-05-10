import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileSearch, Shield, Stethoscope, TimerReset } from 'lucide-react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import FaqSection, { type FaqItem } from '@/components/sections/faq'
import StructuredData from '@/components/seo/structured-data'
import { calendlyBookingUrl } from '@/lib/links'
import { absoluteUrl, dentalPracticesOgImage, siteName, siteUrl } from '@/lib/site'

const dentalFaqs: FaqItem[] = [
  {
    question: 'How can AI help a dental practice without sending records to the cloud?',
    answer:
      'Boston AI Help is positioned as an on-premises deployment, so patient files stay on hardware in the office while staff search charts, scanned records, and internal documents in plain English.',
  },
  {
    question: 'Can the system help with insurance and treatment-history questions?',
    answer:
      'Yes. The dental workflow on this site focuses on treatment history, insurance coverage checks, recall questions, and fast access to practice documentation.',
  },
  {
    question: 'Will staff need technical training?',
    answer:
      'The interface is described as a chat workflow, so the goal is to let front-desk teams, clinicians, and office managers ask normal questions instead of learning a new reporting tool.',
  },
  {
    question: 'Is Boston AI Help a replacement for our practice management software?',
    answer:
      'No. The positioning on this site is that Boston AI Help sits on top of your existing documents and systems so staff can retrieve answers faster from the tools and files you already use.',
  },
]

export const metadata: Metadata = {
  title: 'AI Assistant for Dental Practices',
  description:
    'Private, on-premises AI for dental practices. Help your team search patient records, insurance details, treatment history, and internal SOPs without sending data to the cloud.',
  keywords: [
    'AI assistant for dental practices',
    'dental practice AI',
    'private AI for dentists',
    'on-premises AI for dental offices',
    'dental document search AI',
  ],
  alternates: {
    canonical: '/dental-practices',
  },
  openGraph: {
    title: 'AI Assistant for Dental Practices | Boston AI Help',
    description:
      'Private, on-premises AI for dental practices that need instant answers from patient records and internal documents.',
    url: absoluteUrl('/dental-practices'),
    siteName,
    type: 'website',
    images: [
      {
        url: dentalPracticesOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} dental practices social preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Assistant for Dental Practices | Boston AI Help',
    description:
      'Search patient records, scanned documents, and internal SOPs with private on-premises AI.',
    images: [dentalPracticesOgImage],
  },
}

const dentalSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Assistant for Dental Practices',
    serviceType: 'On-premises AI assistant for dental practices',
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    url: absoluteUrl('/dental-practices'),
    description:
      'Private AI assistant for dental practices that need fast answers from patient records, insurance documents, and internal SOPs without using the cloud.',
    areaServed: 'US',
    audience: {
      '@type': 'Audience',
      audienceType: 'Dental practices',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Dental Practices',
        item: absoluteUrl('/dental-practices'),
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dentalFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  },
]

const benefits = [
  {
    icon: FileSearch,
    title: 'Find treatment history quickly',
    description:
      'Give dentists and hygienists faster answers from patient charts, scanned PDFs, consent forms, and old notes.',
  },
  {
    icon: Shield,
    title: 'Keep patient data in-house',
    description:
      'The site positioning is simple: private AI on your own hardware, not a public cloud workflow for PHI.',
  },
  {
    icon: TimerReset,
    title: 'Reduce front-desk search time',
    description:
      'Help the team answer common questions about recalls, patient context, and office procedures without digging through folders.',
  },
]

const workflows = [
  'What treatment did this patient receive in the last six months?',
  'Do we already have a scanned referral or consent form on file?',
  'Which patients are due for recall this month?',
  'Where is our written protocol for emergency scheduling and follow-up?',
]

export default function DentalPracticesPage() {
  return (
    <>
      <StructuredData data={dentalSchemas} />
      <main>
        <Navbar />

        <section className="relative overflow-hidden px-6 pb-20 pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(66,133,244,0.12),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Dental Practices
              </p>
              <h1 className="mb-5 max-w-3xl text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                A private AI assistant for dental practices that need answers fast.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Help your team search patient records, scanned files, insurance context, and office
                procedures without sending sensitive data to the cloud.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={calendlyBookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book a Demo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#use-cases"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  See the Homepage Overview
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <Stethoscope size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Built for dental teams</h2>
                  <p className="text-sm text-muted-foreground">
                    Fast answers from the records your practice already has.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {workflows.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                Why Dental Teams Choose This
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
                Built around the questions dental practices need answered every day.
              </h2>
              <p className="text-lg text-muted-foreground">
                Dental teams care about patient history, insurance context, office procedures, and
                fast access to records during busy schedules. This page focuses on that workflow so
                the value is clear from the first screen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          eyebrow="Dental FAQ"
          title="Common questions from dental practices"
          description="These are the kinds of concerns buyers usually want answered before they request a walkthrough."
          items={dentalFaqs}
        />

        <section className="bg-secondary/30 px-6 py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl border border-border bg-card p-8 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Want a dental-practice-specific walkthrough?
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Book a demo and we can walk through patient-history retrieval, insurance questions,
              and practice-document search in the context of a dental office workflow.
            </p>
            <Link
              href={calendlyBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Dental Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
