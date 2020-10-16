require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Boules Consulting",
    author: "Anthony Boules",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.MAIL_CHIMP,
        timeout: 3500,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpcontent",
        url: process.env.GRAPHQL_URL,
        refetchInterval: 60,
      },
    },
  ],
}
