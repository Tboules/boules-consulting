const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const serviceTemplate = path.resolve(`src/templates/ServicesInfo.js`)

  const res = await graphql(`
    {
      wpcontent {
        serves {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.wpcontent.serves.edges.forEach(edge => {
    createPage({
      path: `/services/${edge.node.slug}`,
      component: serviceTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
