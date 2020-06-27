/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        pages: allStrapiPages {
          edges {
            node {
              strapiId
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.

  const pages = result.data.pages.edges
  pages.forEach((page, index) => {
    createPage({
      path: `/${page.node.title}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.node.strapiId,
      },
    })
  })
}
