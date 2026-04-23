export type FaqItem = {
  question: string
  answer: string
}

export const homeFaqs: FaqItem[] = [
  {
    question: 'What is an on-premises AI assistant?',
    answer:
      'An on-premises AI assistant runs on hardware in your office instead of in a public cloud. That means your team can search and ask questions about internal files while keeping the data inside your environment.',
  },
  {
    question: 'Can Boston AI Help work with scanned PDFs and older documents?',
    answer:
      'Yes. The system is designed to ingest PDFs, scanned documents, spreadsheets, and other internal files so they can be indexed and searched in plain English.',
  },
  {
    question: 'Is this a fit for sensitive patient or financial data?',
    answer:
      'That is the core use case. Boston AI Help is built for teams that need fast answers from private documents without sending those records to a third-party AI cloud service.',
  },
  {
    question: 'How long does setup usually take?',
    answer:
      'Setup depends on file volume and system complexity, but the site currently positions most deployments as a short onboarding process measured in days, not months.',
  },
  {
    question: 'Does my team need training to use it?',
    answer:
      'The product is presented as a chat-based interface, so the goal is to let staff ask normal questions instead of learning a complicated search workflow.',
  },
  {
    question: 'Who is Boston AI Help for?',
    answer:
      'Right now the clearest audience is dental practices and accounting firms that need secure, local access to patient files, financial records, and internal operating documents.',
  },
]

type FaqSectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  items?: FaqItem[]
}

export default function FaqSection({
  id = 'faq',
  eyebrow = 'FAQ',
  title = 'Questions teams ask before booking a demo',
  description = 'These are the questions buyers usually want answered before they move forward with a private AI deployment.',
  items = homeFaqs,
}: FaqSectionProps) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map(({ question, answer }) => (
            <article
              key={question}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="mb-3 text-lg font-semibold text-foreground">{question}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
