module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/favicon.png",
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: true,
                }
            }
        },
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                precision: 8,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
    ],
};
