export const siteName = 'Boston AI Help'
export const siteUrl = 'https://bostonaihelp.com'
export const siteTitle = 'Boston AI Help | Private AI Assistants for Dental Practices'
export const siteDescription =
  'Private, on-premises AI assistants for dental practices. Search patient records, treatment notes, and internal files without sending data to the cloud.'
export const siteLogo = '/Boston%20ai%20help-logo.png'
export const siteFavicon = '/Boston%20ai%20help-favicon.png'
export const siteOgImage = '/opengraph-image'
export const dentalPracticesOgImage = '/dental-practices/opengraph-image'
export const siteKeywords = [
  'Boston AI Help',
  'private AI assistant',
  'on-premises AI assistant',
  'AI for dental practices',
  'dental practice AI',
  'document search AI',
  'private AI for healthcare offices',
]

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}
