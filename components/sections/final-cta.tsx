import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function FinalCta() {
  return (
    <section id="demo" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Turn Your Documents Into an{' '}
            <span className="text-primary">AI Assistant</span> Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl text-balance leading-relaxed">
            Book a 30-minute demo. We will walk you through the system with a live example using
            sample data from your industry — no commitment required.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="mailto:demo@localmind.ai"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Book a Demo
            <ArrowRight size={16} />
          </Link>
          <Link
            href="mailto:sales@localmind.ai"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            <Mail size={16} />
            Contact Sales
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-6 justify-center items-center pt-4">
          {[
            'No long-term contract required',
            '30-day onboarding included',
            'Hardware spec guidance provided',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
