import Image from 'next/image'
import Link from 'next/link'
import { calendlyBookingUrl } from '@/lib/links'

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Dental Practices', href: '/dental-practices' },
  { label: 'Book a Demo', href: calendlyBookingUrl },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg border border-border bg-white shadow-sm">
              <Image
                src="/Boston%20ai%20help-favicon.png"
                alt="Boston AI Help logo"
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-semibold text-foreground">Boston AI Help</span>
          </div>
          <p className="text-xs text-muted-foreground">Private AI. Your office. Your data.</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-center text-xs text-muted-foreground md:text-right">
          &copy; {new Date().getFullYear()} Boston AI Help. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
