import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, FileSpreadsheet, Lock, SearchCheck, Wallet } from 'lucide-react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import FaqSection, { type FaqItem } from '@/components/sections/faq'
import StructuredData from '@/components/seo/structured-data'
import { calendlyBookingUrl } from '@/lib/links'
import { absoluteUrl, siteName, siteOgImage, siteUrl } from '@/lib/site'

const accountingFaqs: FaqItem[] = [
  {
    question: 'What kinds of accounting documents can the assistant search?',
    answer:
      'The positioning on this site covers financial statements, invoices, tax records, working papers, engagement files, and internal SOPs that teams need to reference quickly.',
  },
  {
    question: 'Why not just use a generic cloud chatbot?',
    answer:
      'Because many firms do not want confidential client financial documents flowing into a public cloud workflow. Boston AI Help is positioned around private, on-premises deployment instead.',
  },
  {
    question: 'Can the assistant help during busy periods like tax season?',
    answer:
      'That is one of the clearest use cases. The site copy focuses on faster access to prior-year returns, invoices, audit status, and internal tax knowledge when response times matter most.',
  },
  {
    question: 'Does this replace our document management or accounting system?',
    answer:
      'No. The value proposition here is faster retrieval and question answering across the systems and files you already use, not a rip-and-replace migration.',
  },
]

export const metadata: Metadata = {
  title: 'AI Assistant for Accounting Firms',
  description:
    'Private, on-premises AI for accounting firms. Help your team search tax files, financial statements, invoices, and internal SOPs without exposing confidential client data to the cloud.',
  keywords: [
    'AI assistant for accounting firms',
    'private AI for accountants',
    'on-premises AI for accounting firms',
    'accounting document search AI',
    'AI for tax and audit teams',
  ],
  alternates: {
    canonical: '/accounting-firms',
  },
  openGraph: {
    title: 'AI Assistant for Accounting Firms | Boston AI Help',
    description:
      'Private, on-premises AI for accounting firms that need faster answers from client financial records and internal documents.',
    url: absoluteUrl('/accounting-firms'),
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
    title: 'AI Assistant for Accounting Firms | Boston AI Help',
    description:
      'Search tax files, invoices, and internal knowledge with private AI that runs on your own hardware.',
    images: [siteOgImage],
  },
}

const accountingSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Assistant for Accounting Firms',
    serviceType: 'On-premises AI assistant for accounting firms',
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    url: absoluteUrl('/accounting-firms'),
    description:
      'Private AI assistant for accounting firms that need quick answers from client financial documents, tax files, and internal SOPs without cloud exposure.',
    areaServed: 'US',
    audience: {
      '@type': 'Audience',
      audienceType: 'Accounting firms',
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
        name: 'Accounting Firms',
        item: absoluteUrl('/accounting-firms'),
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: accountingFaqs.map(({ question, answer }) => ({
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
    icon: FileSpreadsheet,
    title: 'Search client files faster',
    description:
      'Help staff find invoices, statements, prior-year returns, and working papers without digging through folder trees.',
  },
  {
    icon: Lock,
    title: 'Keep confidential data private',
    description:
      'The core positioning is on-premises AI, which is a stronger message for firms that handle sensitive client financial records.',
  },
  {
    icon: SearchCheck,
    title: 'Reduce answer time for staff',
    description:
      'Give tax, audit, and advisory teams a faster way to retrieve context from internal SOPs and document archives.',
  },
]

const workflows = [
  'Summarize the Q3 P&L for this client.',
  'Find every invoice over $10,000 from last year.',
  'Has the audit report been filed yet for this engagement?',
  'Where is our internal checklist for month-end review?',
]

export default function AccountingFirmsPage() {
  return (
    <>
      <StructuredData data={accountingSchemas} />
      <main>
        <Navbar />

        <section className="relative overflow-hidden px-6 pb-20 pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(66,133,244,0.12),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Accounting Firms
              </p>
              <h1 className="mb-5 max-w-3xl text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                A private AI assistant for accounting firms with sensitive client data.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Help your team search tax files, financial statements, invoices, and internal
                knowledge without routing confidential records through a generic cloud chatbot.
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
                  <Calculator size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Built for accounting workflows
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Faster answers from financial documents and internal firm knowledge.
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
                Why Accounting Teams Choose This
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
                Built for firms that need speed without compromising confidentiality.
              </h2>
              <p className="text-lg text-muted-foreground">
                Accounting firms care about confidential client records, fast retrieval during busy
                periods, and consistent answers across tax, audit, and advisory workflows. This
                page speaks directly to that environment.
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

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8">
            <div className="mb-8 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                Key Outcomes
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
                Built for teams that need speed without losing control.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Wallet,
                  title: 'Less time lost to document hunting',
                  description:
                    'Free up tax and client-service staff from manual search work during busy periods.',
                },
                {
                  icon: Lock,
                  title: 'A stronger privacy story',
                  description:
                    'On-premises AI is easier to explain to firms that are cautious about client confidentiality.',
                },
                {
                  icon: SearchCheck,
                  title: 'More consistent answers',
                  description:
                    'Make it easier for staff to locate the right document, policy, or prior context before responding.',
                },
              ].map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-secondary/30 p-6"
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
          eyebrow="Accounting FAQ"
          title="Common questions from accounting firms"
          description="This page is tuned to the objections and workflows buyers in accounting actually care about."
          items={accountingFaqs}
        />

        <section className="bg-secondary/30 px-6 py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl border border-border bg-card p-8 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Want an accounting-firm-specific demo?
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              We can walk through how the assistant helps with tax files, invoices, client
              documents, and internal SOP retrieval without using a cloud AI workflow.
            </p>
            <Link
              href={calendlyBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book an Accounting Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
