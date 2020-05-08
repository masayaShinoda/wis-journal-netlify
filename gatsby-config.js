/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `WIS Journal`,
    description: `Welcome to the student run newspaper covering events in Western International School.`,
    url: `https://wis-journal.com`,
    author: `Masaya Shida`,
    copyright: `Masaya Shida`,
    siteUrl: `https://wis-journal.com`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-dark-mode",
  ],
}
