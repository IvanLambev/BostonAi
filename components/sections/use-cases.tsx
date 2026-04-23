'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, ChevronRight, Stethoscope } from 'lucide-react'
import { cn } from '@/lib/utils'

const useCases = {
  dentists: {
    icon: Stethoscope,
    label: 'Dental Practices',
    tagline: 'From patient history to insurance - answered in seconds.',
    cases: [
      {
        question: '"What procedures did Patient Miller have in the last 6 months?"',
        answer: 'Pulled from patient records. Answered in 1.8 seconds.',
        highlight: 'Patient history instantly',
      },
      {
        question: '"Is this treatment covered under Plan B insurance?"',
        answer: 'Cross-referenced with your insurance database on-site.',
        highlight: 'Insurance checks',
      },
      {
        question: '"What\'s the standard treatment protocol for a Class II cavity?"',
        answer: 'Retrieved from your internal clinical guidelines document.',
        highlight: 'Treatment recommendations',
      },
      {
        question: '"Which patients are due for a recall this month?"',
        answer: 'Aggregated from your scheduling and patient files.',
        highlight: 'Patient scheduling',
      },
    ],
  },
  accountants: {
    icon: Calculator,
    label: 'Accounting Firms',
    tagline: 'From financial summaries to tax insights - without digging.',
    cases: [
      {
        question: '"Summarize the Q3 P&L for client Acme Corp."',
        answer: 'Pulled from their uploaded financials. Ready in 2 seconds.',
        highlight: 'Financial summaries',
      },
      {
        question: '"Find all invoices over $10,000 from 2023."',
        answer: 'Searched across all client document folders instantly.',
        highlight: 'Document retrieval',
      },
      {
        question: '"What deductions are available for a sole proprietor in this bracket?"',
        answer: 'Referenced your internal tax knowledge base and notes.',
        highlight: 'Tax insights',
      },
      {
        question: '"Has the audit report for Baker LLC been filed?"',
        answer: 'Status checked against your filing records and calendar.',
        highlight: 'Compliance tracking',
      },
    ],
  },
}

export default function UseCases() {
  const [active, setActive] = useState<'dentists' | 'accountants'>('dentists')
  const current = useCases[active]
  const Icon = current.icon

  return (
    <section id="use-cases" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Use Cases
        </p>
        <h2 className="mb-4 text-center text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Built for your profession
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-balance text-lg text-muted-foreground">
          Boston AI Help is configured specifically for dental practices and accounting firms - not
          a generic chatbot.
        </p>

        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1">
            {(Object.keys(useCases) as Array<'dentists' | 'accountants'>).map((key) => {
              const TabIcon = useCases[key].icon
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all',
                    active === key
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <TabIcon size={15} />
                  {useCases[key].label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{current.label}</h3>
                <p className="text-sm text-muted-foreground">{current.tagline}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {current.cases.map(({ highlight, question, answer }) => (
                <div
                  key={highlight}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      {highlight}
                    </p>
                    <p className="mb-1 text-sm font-medium text-foreground">{question}</p>
                    <p className="text-xs text-muted-foreground">{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center gap-2 border-b border-border bg-card/80 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                {active === 'dentists' ? 'Dental Practice AI' : 'Accounting Firm AI'}
              </span>
            </div>
            <div className="flex flex-col gap-3 p-5">
              {current.cases.slice(0, 2).map(({ question, answer, highlight }, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-xl bg-primary px-3 py-2 text-sm text-primary-foreground">
                      {question.replace(/"/g, '')}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-xl border border-border bg-secondary px-3 py-2 text-sm text-foreground">
                      <span className="mb-1 block text-xs font-semibold text-primary">
                        {highlight}
                      </span>
                      {answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            {
              href: '/dental-practices',
              title: 'AI assistant for dental practices',
              description:
                'Explore the dedicated dental page for patient-record search, insurance questions, and office workflow use cases.',
              cta: 'Explore dental page',
            },
            {
              href: '/accounting-firms',
              title: 'AI assistant for accounting firms',
              description:
                'Explore the dedicated accounting page for tax files, invoices, audit workflows, and client-document retrieval.',
              cta: 'Explore accounting page',
            },
          ].map(({ href, title, description, cta }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Industry Page
              </p>
              <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <span className="text-sm font-semibold text-primary">{cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
