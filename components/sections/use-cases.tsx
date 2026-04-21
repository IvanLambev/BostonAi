'use client'

import { useState } from 'react'
import { Stethoscope, Calculator, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const useCases = {
  dentists: {
    icon: Stethoscope,
    label: 'Dental Practices',
    tagline: 'From patient history to insurance — answered in seconds.',
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
    tagline: "From financial summaries to tax insights — without digging.",
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
    <section id="use-cases" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          Use Cases
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center text-balance mb-4">
          Built for your profession
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-xl mx-auto mb-12 text-balance">
          LocalMind is configured specifically for dental practices and accounting firms — not a
          generic chatbot.
        </p>

        {/* Tab toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 bg-card border border-border rounded-xl p-1">
            {(Object.keys(useCases) as Array<'dentists' | 'accountants'>).map((key) => {
              const TabIcon = useCases[key].icon
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={cn(
                    'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all',
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

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground">{current.label}</h3>
                <p className="text-sm text-muted-foreground">{current.tagline}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {current.cases.map(({ highlight, question, answer }) => (
                <div
                  key={highlight}
                  className="rounded-xl border border-border bg-card p-4 flex gap-4 hover:border-primary/30 transition-colors"
                >
                  <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">{highlight}</p>
                    <p className="text-sm text-foreground font-medium mb-1">{question}</p>
                    <p className="text-xs text-muted-foreground">{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: example chat */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                {active === 'dentists' ? 'Dental Practice AI' : 'Accounting Firm AI'}
              </span>
            </div>
            <div className="p-5 flex flex-col gap-3">
              {current.cases.slice(0, 2).map(({ question, answer, highlight }, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-xl px-3 py-2 bg-primary text-primary-foreground text-sm">
                      {question.replace(/"/g, '')}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-xl px-3 py-2 bg-secondary border border-border text-sm text-foreground">
                      <span className="text-xs font-semibold text-primary block mb-1">{highlight}</span>
                      {answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
