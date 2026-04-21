import { ScanLine, GitMerge, BrainCircuit, MessageSquare } from 'lucide-react'

const steps = [
  {
    icon: ScanLine,
    step: '01',
    title: 'We digitize your documents',
    description:
      'We ingest all your existing files — PDFs, scanned papers, spreadsheets, emails — and make them machine-readable. No disruption to your workflow.',
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
      'Ask questions in plain English. Get answers with references back to the exact document and page — instantly, accurately, privately.',
  },
]

export default function Solution() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          The Solution
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center text-balance mb-4">
          Your AI Assistant for Internal Knowledge
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16 text-balance">
          One assistant that knows everything in your practice — and answers instantly, with no cloud
          subscription, no data risk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="rounded-2xl border border-border bg-card p-7 flex gap-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-xs font-mono font-bold text-primary/50">{step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Before LocalMind</p>
            <ul className="flex flex-col gap-3">
              {[
                'Open 4 different folders to find a file',
                'Ask a colleague — they might not know',
                'Spend 20 min skimming PDFs manually',
                'Give up and make a decision without full context',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-0.5 w-4 h-4 rounded-full border border-border flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">After LocalMind</p>
            <ul className="flex flex-col gap-3">
              {[
                'Type a question in plain English',
                'Get the answer in under 3 seconds',
                'See the exact source document and page',
                'Move on — confident and informed',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 flex-shrink-0 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
