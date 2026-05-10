type OgImageTemplateProps = {
  eyebrow: string
  title: string
  description: string
  footer: string
}

export default function OgImageTemplate({
  eyebrow,
  title,
  description,
  footer,
}: OgImageTemplateProps) {
  return (
    <div
      style={{
        alignItems: 'stretch',
        background: '#f6f8fc',
        color: '#0f172a',
        display: 'flex',
        fontFamily: 'Inter, Arial, sans-serif',
        height: '100%',
        justifyContent: 'center',
        padding: 64,
        width: '100%',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #dbe4f0',
          borderRadius: 32,
          boxShadow: '0 24px 80px rgba(15, 23, 42, 0.14)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          overflow: 'hidden',
          padding: 56,
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#2563eb',
            borderRadius: 999,
            height: 180,
            opacity: 0.12,
            position: 'absolute',
            right: -52,
            top: -48,
            width: 180,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: 16,
            }}
          >
            <div
              style={{
                alignItems: 'center',
                background: '#2563eb',
                borderRadius: 18,
                color: '#ffffff',
                display: 'flex',
                fontSize: 32,
                fontWeight: 800,
                height: 72,
                justifyContent: 'center',
                width: 72,
              }}
            >
              AI
            </div>
            <div
              style={{
                color: '#2563eb',
                display: 'flex',
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: 1.8,
                textTransform: 'uppercase',
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
              maxWidth: 880,
            }}
          >
            <div
              style={{
                color: '#0f172a',
                display: 'flex',
                fontSize: 72,
                fontWeight: 850,
                lineHeight: 1.03,
              }}
            >
              {title}
            </div>
            <div
              style={{
                color: '#475569',
                display: 'flex',
                fontSize: 31,
                lineHeight: 1.32,
                maxWidth: 930,
              }}
            >
              {description}
            </div>
          </div>
        </div>

        <div
          style={{
            alignItems: 'center',
            borderTop: '1px solid #e2e8f0',
            color: '#334155',
            display: 'flex',
            fontSize: 25,
            fontWeight: 700,
            justifyContent: 'space-between',
            paddingTop: 30,
          }}
        >
          <span>{footer}</span>
          <span>bostonaihelp.com</span>
        </div>
      </div>
    </div>
  )
}
