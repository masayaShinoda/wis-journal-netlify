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
    image: `https://raw.githubusercontent.com/masayaShinoda/wis-journal-netlify/master/src/images/dark-font-header-logo.png`,
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
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
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
    `gatsby-plugin-sitemap`,
    // You can should only have one instance of this plugin
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://wis-journal-netlify.netlify.app/`, // required!
      },
    },
  ],
}
