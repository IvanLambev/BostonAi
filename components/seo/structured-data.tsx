type StructuredDataProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

export default function StructuredData({ data }: StructuredDataProps) {
  const entries = Array.isArray(data) ? data : [data]

  return (
    <>
      {entries.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  )
}
