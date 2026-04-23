import { BrainCircuit, GitMerge, MessageSquare, ScanLine } from 'lucide-react'

const steps = [
  {
    icon: ScanLine,
    step: '01',
    title: 'We digitize your documents',
    description:
      'We ingest all your existing files - PDFs, scanned papers, spreadsheets, emails - and make them machine-readable. No disruption to your workflow.',
  },
  {
    icon: GitMerge,
    step: '02',
    title: 'We connect your existing systems',
    description:
      'We integrate with the practice management or accounting software you already use, so everything speaks the same language.',
  },
  {
    icon: BrainCircuit,
    step: '03',
    title: 'We install a local AI model',
    description:
      'A private AI (running on Gemma) is installed directly on hardware in your office. No internet connection required. No data ever sent outside.',
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'You chat with your own data',
    description:
      'Ask questions in plain English. Get answers with references back to the exact document and page - instantly, accurately, privately.',
  },
]

export default function Solution() {
  return (
    <section className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          The Solution
        </p>

        <h2 className="mb-4 text-center text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Your AI Assistant for Internal Knowledge
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-balance text-lg text-muted-foreground">
          One assistant that knows everything in your practice - and answers instantly, with no
          cloud subscription and no data risk.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="flex gap-5 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/30"
            >
              <div className="flex flex-shrink-0 flex-col items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="font-mono text-xs font-bold text-primary/50">{step}</span>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Before Boston AI
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Open 4 different folders to find a file',
                'Ask a colleague - they might not know',
                'Spend 20 min skimming PDFs manually',
                'Give up and make a decision without full context',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border border-border" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              After Boston AI
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Type a question in plain English',
                'Get the answer in under 3 seconds',
                'See the exact source document and page',
                'Move on - confident and informed',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
