import { ImageResponse } from 'next/og'
import OgImageTemplate from '@/components/seo/og-image-template'
import { siteName } from '@/lib/site'

export const runtime = 'edge'
export const alt = `${siteName} dental practices social preview`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgImageTemplate
        eyebrow="Dental Practices"
        title="AI assistant for dental practices"
        description="Find patient history, insurance context, scanned records, and SOPs with private on-premises AI."
        footer={siteName}
      />
    ),
    size,
  )
}
