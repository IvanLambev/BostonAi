import Link from 'next/link'
import { ChevronRight, Stethoscope } from 'lucide-react'

const useCases = [
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
]

export default function UseCases() {
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
          Boston AI Help is configured specifically for dental practices - not a generic chatbot.
        </p>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Stethoscope size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Dental Practices</h3>
                <p className="text-sm text-muted-foreground">
                  From patient history to insurance - answered in seconds.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {useCases.map(({ highlight, question, answer }) => (
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
              <span className="ml-2 font-mono text-xs text-muted-foreground">Dental Practice AI</span>
            </div>
            <div className="flex flex-col gap-3 p-5">
              {useCases.slice(0, 2).map(({ question, answer, highlight }, i) => (
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

        <Link
          href="/dental-practices"
          className="mt-12 block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Dental Page
          </p>
          <h3 className="mb-3 text-xl font-bold text-foreground">
            AI assistant for dental practices
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            Explore the dedicated dental page for patient-record search, insurance questions, and
            office workflow use cases.
          </p>
          <span className="text-sm font-semibold text-primary">Explore dental page</span>
        </Link>
      </div>
    </section>
  )
}
