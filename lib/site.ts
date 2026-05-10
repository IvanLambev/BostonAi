export const siteName = 'Boston AI Help'
export const siteUrl = 'https://bostonaihelp.com'
export const siteDescription =
  'Private, on-premises AI assistants for dental practices. Search patient records, treatment notes, and internal files without sending data to the cloud.'
export const siteOgImage = '/Boston%20ai%20help-logo.png'

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}
