module.exports = {
  siteMetadata: {
    title: 'Sine Nomine',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Handlee`, `Great Vibes`],
      },
    },
    'gatsby-transformer-remark',
  ],
}
