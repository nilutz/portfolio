const config = require("./data/SiteConfig");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: "#00695C"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 256,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-responsive-iframe`
          },
          `gatsby-remark-autolink-headers`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/${config.contentDir}`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: "#e0e0e0",
        theme_color: "#00695C",
        display: "minimal-ui",
        icons: [
          {
            src: "/img/pommes.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/img/pommes.png",
            sizes: "512x512",
            type: "image/png"
          },
          `gatsby-plugin-offline`
        ]
      }
    }
  ]
};
