const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    query {
      allDatoCmsArticle {
        edges {
          node {
            title
            author
            id
            date(formatString: "DD/MM/YYYY")
            category
            contentNode {
              childMarkdownRemark {
                html
              }
              id
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: blogPostTemplate,
      context: { data: node }, // additional data can be passed via context
    })
  })
}
