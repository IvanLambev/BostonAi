import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { calendlyBookingUrl } from '@/lib/links'

export default function FinalCta() {
  return (
    <section id="demo" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get Started
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Turn Your Documents Into an <span className="text-primary">AI Assistant</span> Today
          </h2>
          <p className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            Book a 30-minute demo. We will walk you through the system with a live example using
            sample data from your industry - no commitment required.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={calendlyBookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Demo
            <ArrowRight size={16} />
          </Link>
          <Link
            href={calendlyBookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Mail size={16} />
            Contact Sales
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          {[
            'No long-term contract required',
            '30-day onboarding included',
            'Hardware spec guidance provided',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
