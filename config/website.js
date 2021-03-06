const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Laurįnas', // Navigation and Site Title
  siteTitleAlt: 'Laurįnas', // Alternative Site title for SEO
  siteTitleShort: 'Laurįnas', // short_name for manifest
  siteHeadline: 'Laurįnas', // Headline for schema.org JSONLD
  siteUrl: 'https://xn--laurnas-efb.lt', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal Space',
  author: 'Laurįnas', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@none', // Twitter Username
  ogSiteName: 'laur', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-475122259312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
