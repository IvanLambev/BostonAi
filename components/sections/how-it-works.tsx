import { MessageCircle, Settings, Upload } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    number: '1',
    title: 'We ingest your documents',
    description:
      'Our team processes all your existing files, however they are stored. PDFs, Word docs, scanned papers, and clinical notes are all included.',
    detail: 'Typical setup: 2-3 business days',
  },
  {
    icon: Settings,
    number: '2',
    title: 'We structure and secure them',
    description:
      'Your data is organized, indexed, and encrypted on your local hardware. Access controls are configured so only the right people can ask the right questions.',
    detail: 'Role-based access built in',
  },
  {
    icon: MessageCircle,
    number: '3',
    title: 'You chat with your data',
    description:
      'From day one, your staff can ask questions and get instant, accurate answers with citations back to the source. No training required.',
    detail: 'Ready to use from day one',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          How It Works
        </p>
        <h2 className="mb-4 text-center text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Up and running in three steps
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-balance text-lg text-muted-foreground">
          We do the heavy lifting. You get a working AI assistant without disrupting your practice.
        </p>

        <div className="relative flex flex-col gap-8 md:flex-row">
          <div className="absolute left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] top-9 hidden h-px bg-border md:block" />

          {steps.map(({ icon: Icon, number, title, description, detail }) => (
            <div key={number} className="relative flex flex-1 flex-col items-center text-center">
              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/40 bg-card">
                <Icon size={22} className="text-primary" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {number}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
