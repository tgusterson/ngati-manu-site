require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `Ngāti Manu`,
    author: {
      name: `Thom Gusterson`,
      summary: `New Zealand based web developer`,
    },
    description: `Learn about the Ngāti Manu iwi and register as a member.`,
    siteUrl: `https://ngati-manu-site.netlify.app/`,
    social: {
      twitter: `thomgusterson`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `caveat:300,400,500,600,700`
        ], display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Ngāti Manu Iwi Site`,
    //     short_name: `Ngāti Manu`,
    //     start_url: `/`,
    //     icon: `content/assets/gatsby-icon.png`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["FAUNA_SERVER_SECRET"]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
