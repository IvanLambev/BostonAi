import { Eye, Lock, Server, ShieldCheck, UserCheck, WifiOff } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Runs entirely on your hardware',
    description:
      'The AI model and all your data live on a server in your office. We never provision cloud instances for your data.',
  },
  {
    icon: WifiOff,
    title: 'Works offline',
    description:
      'Once installed, Boston AI Help operates without an internet connection. A network outage does not affect your ability to access your information.',
  },
  {
    icon: Lock,
    title: 'Encrypted at rest and in use',
    description:
      'All data is encrypted on disk and in memory. Only authenticated users on your local network can access the system.',
  },
  {
    icon: Eye,
    title: 'No telemetry, no logging to us',
    description:
      'We do not receive usage data, query logs, or any information about what you search. What happens in your office stays there.',
  },
  {
    icon: UserCheck,
    title: 'Role-based access controls',
    description:
      'Configure who can ask what. Front-desk staff can access scheduling; clinicians can access medical records. Fully customizable.',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA-ready architecture',
    description:
      'Designed around HIPAA technical safeguards - access controls, activity trails, encryption, and data isolation. We recommend your compliance officer review during setup.',
  },
]

export default function Security() {
  return (
    <section id="security" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Security & Privacy
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Your Data Never Leaves Your Office
          </h2>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground">
            We built Boston AI Help specifically because cloud AI is not acceptable when you handle
            patient records and clinical documents. Privacy is not a feature - it is the foundation.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row">
          <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <ShieldCheck size={18} className="text-primary" />
          </div>
          <div>
            <p className="mb-1 font-semibold text-foreground">On HIPAA compliance</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Boston AI Help is built with HIPAA technical safeguards in mind, including access
              controls, encryption, and activity logging. However, HIPAA compliance is determined by
              your complete operational environment and policies. We do not certify compliance - we
              recommend working with your compliance officer or a HIPAA consultant during
              deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
