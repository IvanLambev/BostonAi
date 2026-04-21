import Link from 'next/link'

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book a Demo', href: '#demo' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs font-mono">L</span>
            </div>
            <span className="font-semibold text-foreground">LocalMind</span>
          </div>
          <p className="text-xs text-muted-foreground">Private AI. Your office. Your data.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-6 justify-center">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} LocalMind AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
