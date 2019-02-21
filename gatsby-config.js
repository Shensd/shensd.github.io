module.exports = {
    siteMetadata: {
        title: `Jack Hance`,
        description: `Jack Hance's Portfolio Website, a one stop shop for any and all about Jack Hance`,
        author: `shensd`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/favicon.png`, // relative to root of site
            },
        },
    ],
}
