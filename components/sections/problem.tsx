import { Clock, FolderOpen, Lock } from 'lucide-react'

const problems = [
  {
    icon: FolderOpen,
    title: 'Files are scattered everywhere',
    description:
      'Patient records, scanned PDFs, handwritten notes, and spreadsheets are spread across folders, drives, and legacy systems with no easy way to search them.',
  },
  {
    icon: Clock,
    title: 'Staff wastes hours searching',
    description:
      'Your team spends 20-40 minutes per day hunting for information that should take seconds to find. That time adds up to thousands of dollars every month.',
  },
  {
    icon: Lock,
    title: 'Knowledge is locked away',
    description:
      "Years of institutional knowledge is buried inside documents. When a staff member leaves or a question comes up, there's no quick way to get an answer.",
  },
]

export default function Problem() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          The Problem
        </p>

        <h2 className="mb-4 text-center text-balance text-3xl font-bold text-foreground sm:text-4xl">
          {"You're Sitting on Valuable Data -"}
          <br className="hidden sm:block" />
          {" But Can't Use It"}
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-balance text-lg text-muted-foreground">
          Most clinics and accounting firms have years of records. The information is there. It
          just takes too long to reach it.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/30"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                <Icon size={20} className="text-destructive" style={{ color: 'oklch(0.65 0.15 25)' }} />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 divide-y divide-border rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:text-left sm:divide-x sm:divide-y-0">
          {[
            { stat: '40%', label: 'of employee time is spent finding information' },
            { stat: '23 min', label: 'average time to locate a single document' },
            { stat: '$15K+', label: 'lost per employee annually to inefficiency' },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex-1 px-6 py-2 sm:py-0">
              <p className="mb-1 text-3xl font-bold text-primary">{stat}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
