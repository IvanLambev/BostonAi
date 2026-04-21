import { Upload, Settings, MessageCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    number: '1',
    title: 'We ingest your documents',
    description:
      'Our team processes all your existing files — however they\'re stored. PDFs, Word docs, scanned papers, spreadsheets. We handle the complexity.',
    detail: 'Typical setup: 2–3 business days',
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
      'From day one, your staff can ask questions and get instant, accurate answers — with citations back to the source. No training required.',
    detail: 'Ready to use from day one',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center text-balance mb-4">
          Up and running in three steps
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-xl mx-auto mb-16 text-balance">
          We do the heavy lifting. You get a working AI assistant without disrupting your practice.
        </p>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-9 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-border" />

          {steps.map(({ icon: Icon, number, title, description, detail }) => (
            <div key={number} className="flex-1 flex flex-col items-center text-center relative">
              {/* Circle */}
              <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center mb-6 relative z-10">
                <Icon size={22} className="text-primary" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {number}
                </span>
              </div>

              <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
