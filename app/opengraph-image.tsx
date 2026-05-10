import { ImageResponse } from 'next/og'
import OgImageTemplate from '@/components/seo/og-image-template'
import { siteName } from '@/lib/site'

export const runtime = 'edge'
export const alt = `${siteName} social preview`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgImageTemplate
        eyebrow={siteName}
        title="Private AI assistants for dental practices"
        description="Search patient records, treatment notes, and internal files without sending data to the cloud."
        footer="Private on-premises AI"
      />
    ),
    size,
  )
}
