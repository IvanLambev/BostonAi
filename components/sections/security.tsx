import { Server, WifiOff, Lock, ShieldCheck, Eye, UserCheck } from 'lucide-react'

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
      'Once installed, LocalMind operates without an internet connection. A network outage doesn\'t affect your ability to access your information.',
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
      'We don\'t receive usage data, query logs, or any information about what you search. What happens in your office stays there.',
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
      'Designed around HIPAA technical safeguards — access controls, audit trails, encryption, and data isolation. We recommend your compliance officer review during setup.',
  },
]

export default function Security() {
  return (
    <section id="security" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Security & Privacy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Your Data Never Leaves Your Office
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-balance">
            We built LocalMind specifically because cloud AI is not acceptable when you handle
            patient records or client financials. Privacy is not a feature — it is the foundation.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer banner */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldCheck size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">On HIPAA compliance</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              LocalMind is built with HIPAA technical safeguards in mind, including access controls,
              encryption, and audit logging. However, HIPAA compliance is determined by your complete
              operational environment and policies. We do not certify compliance — we recommend
              working with your compliance officer or a HIPAA consultant during deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
