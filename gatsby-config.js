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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WIS Journal`,
        short_name: `WIS Journal`,
        start_url: `/`,
        background_color: `#3b4259`,
        theme_color: `#3b4259`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-react-helmet`,
  ],
}
