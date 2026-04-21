import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
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
    <section id="pricing" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center text-balance mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-xl mx-auto mb-16 text-balance">
          No per-query fees. No surprise cloud bills. A flat monthly fee for unlimited use on your
          own hardware.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-2xl border bg-card p-7 flex flex-col gap-6 relative',
                plan.popular
                  ? 'border-primary/50 ring-1 ring-primary/20'
                  : 'border-border'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-bold text-foreground text-lg mb-0.5">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                )}
              </div>

              <p className="text-sm text-muted-foreground">{plan.description}</p>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#demo"
                className={cn(
                  'flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors',
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

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include hardware spec recommendations, installation support, and a 30-day
          onboarding period. Prices shown are starting points — contact us for an exact quote.
        </p>
      </div>
    </section>
  )
}
