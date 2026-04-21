import { FolderOpen, Clock, Lock } from 'lucide-react'

const problems = [
  {
    icon: FolderOpen,
    title: 'Files are scattered everywhere',
    description:
      'Patient records, scanned PDFs, handwritten notes, spreadsheets — spread across folders, drives, and legacy systems with no easy way to search them.',
  },
  {
    icon: Clock,
    title: 'Staff wastes hours searching',
    description:
      'Your team spends 20–40 minutes per day hunting for information that should take seconds to find. That time adds up to thousands of dollars every month.',
  },
  {
    icon: Lock,
    title: 'Knowledge is locked away',
    description:
      'Years of institutional knowledge is buried inside documents. When a staff member leaves or a question comes up, there\'s no quick way to get an answer.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-center text-sm font-semibold text-primary tracking-widest uppercase mb-4">
          The Problem
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center text-balance mb-4">
          {"You're Sitting on Valuable Data —"}
          <br className="hidden sm:block" />
          {" But Can't Use It"}
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16 text-balance">
          Most clinics and accounting firms have years of records. The information is there. It just
          takes too long to reach it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-destructive" style={{ color: 'oklch(0.65 0.15 25)' }} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stat bar */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 flex flex-col sm:flex-row gap-6 items-center justify-center text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { stat: '40%', label: 'of employee time is spent finding information' },
            { stat: '23 min', label: 'average time to locate a single document' },
            { stat: '$15K+', label: 'lost per employee annually to inefficiency' },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex-1 px-6 py-2 sm:py-0">
              <p className="text-3xl font-bold text-primary mb-1">{stat}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
