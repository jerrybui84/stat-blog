require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
        // Used for the title template on pages other than the index site
        siteTitle: `Jerry Bui`,
        // Default title of the page
        siteTitleAlt: `Jerry Bui Blog - Phân tích thống kê không khó`,
        // Can be used for e.g. JSONLD
        siteHeadline: `Jerry Bui Blog - Phân tích thống kê không khó`,
        // Will be used to generate absolute URLs for og:image etc.
        siteUrl: `https://jerrybui.xyz`,
        // Used for SEO
        siteDescription: `Xin chào, Mình là Jerry Bùi, hiện tại đang là kỹ sư chất lượng làm việc trong lĩnh vực sản xuất điện & điện tử. Đây là trang cá nhân chia sẻ các kiến thức về phân tích thống kê, Minitab, R, khoa học mở và trực quan hóa dữ liệu.`,
        // Will be set on the <html /> tag
        siteLanguage: `en`,
        // Used for og:image and must be placed inside the `static` folder
        siteImage: `/banner.jpg`,
        // Twitter Handle
        author: `@jerry_bui`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `jerrybui`
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Topics`,
            slug: `/topic`,
          },
        ],
        externalLinks: [
          {
            name: `Youtube`,
            url: `https://www.youtube.com/channel/UCpesTmypi88ot_MxoYTWypw`,
          },
          {
            name: `Homepage`,
            url: `https://jerrybui.xyz`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jerry Bui Blog - Phân tích thống kê không khó`,
        short_name: `Jerry-blog`,
        description: `Xin chào, Mình là Jerry Bùi, hiện tại đang là kỹ sư chất lượng làm việc trong lĩnh vực sản xuất điện & điện tử. Đây là trang cá nhân chia sẻ các kiến thức về phân tích thống kê, Minitab, R, khoa học mở và trực quan hóa dữ liệu.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `Jerry Bui Blog - Phân tích thống kê`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
