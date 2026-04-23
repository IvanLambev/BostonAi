import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "We used to spend 15 minutes tracking down a patient's history before a consultation. Now it takes about 10 seconds. I genuinely don't know how we managed without it.",
    name: 'Dr. Sarah Chen',
    title: 'General Dentist, Chen Family Dental',
    initials: 'SC',
  },
  {
    quote:
      'The data privacy piece was non-negotiable for us. Boston AI Help runs on our own server - nothing goes to the cloud. My compliance officer signed off on it within a week.',
    name: 'Marcus Webb',
    title: 'Managing Partner, Webb & Associates CPA',
    initials: 'MW',
  },
  {
    quote:
      'Our front desk staff had zero training in AI. After a one-hour session, they were using it daily. The interface is just chat - anyone can do it.',
    name: 'Dr. Priya Nair',
    title: 'Orthodontist, Nair Orthodontics Group',
    initials: 'PN',
  },
  {
    quote:
      'During tax season, my team used to dread client document requests. Now they pull financial summaries and prior-year returns in under a minute. Game changer.',
    name: 'James Okafor',
    title: 'Senior Accountant, Okafor Financial Services',
    initials: 'JO',
  },
  {
    quote:
      "I was skeptical. We have 12 years of scanned paper files. The team digitized everything in two days and the AI found a billing error we'd missed for months.",
    name: 'Dr. Tom Reyes',
    title: 'Periodontist, Lakeview Dental Specialists',
    initials: 'TR',
  },
  {
    quote:
      'The ROI was clear within the first month. We calculated we were saving roughly 3 hours of staff time per day across our two locations. That pays for itself quickly.',
    name: 'Linda Park',
    title: 'Office Manager, Park & Partners Dental Group',
    initials: 'LP',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Testimonials
        </p>
        <h2 className="mb-4 text-center text-balance text-3xl font-bold text-foreground sm:text-4xl">
          Trusted by practices that handle sensitive data
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-balance text-lg text-muted-foreground">
          From solo dental offices to multi-location accounting firms - here is what they say.
        </p>

        <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {testimonials.map(({ quote, name, title, initials }) => (
            <div
              key={name}
              className="flex break-inside-avoid flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <Stars />
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <span className="text-xs font-bold text-primary">{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * These testimonials are representative examples for illustrative purposes. Real customer
          references available upon request during a demo.
        </p>
      </div>
    </section>
  )
}
