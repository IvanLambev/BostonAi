import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { calendlyBookingUrl } from '@/lib/links'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Starter',
    tagline: 'Small clinics & solo practices',
    price: 'From $499',
    period: '/ month',
    description: 'Everything you need to get started with AI-powered document search.',
    features: [
      'Up to 5 staff users',
      'Up to 10,000 documents',
      'Single-location deployment',
      'Local AI model (Gemma)',
      'Standard support',
      'Initial document ingestion included',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    tagline: 'Multi-provider practices & firms',
    price: 'From $1,299',
    period: '/ month',
    description: 'Advanced features for growing teams with complex document needs.',
    features: [
      'Up to 25 staff users',
      'Unlimited documents',
      'Multi-location support',
      'Role-based access controls',
      'Advanced audit logging',
      'Priority support & SLA',
      'Custom integrations',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Hospital groups & large firms',
    price: 'Custom',
    period: '',
    description: 'Fully custom deployments with dedicated support and white-glove onboarding.',
    features: [
      'Unlimited users',
      'Multi-site deployment',
      'Custom AI model fine-tuning',
      'Dedicated support engineer',
      'Custom SLA agreements',
      'On-site installation & training',
      'Compliance documentation package',
    ],
    cta: 'Get Custom Quote',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Pricing
        </p>
        <h2 className="mb-4 text-center text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-balance text-lg text-muted-foreground">
          No per-query fees. No surprise cloud bills. A flat monthly fee for unlimited use on your
          own hardware.
        </p>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col gap-6 rounded-2xl border bg-card p-7',
                plan.popular ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="mb-0.5 text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>

              <p className="text-sm text-muted-foreground">{plan.description}</p>

              <ul className="flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={calendlyBookingUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors',
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border text-foreground hover:bg-secondary'
                )}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All plans include hardware spec recommendations, installation support, and a 30-day
          onboarding period. Prices shown are starting points - contact us for an exact quote.
        </p>
      </div>
    </section>
  )
}
