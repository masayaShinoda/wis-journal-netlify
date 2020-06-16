import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

//bootstrap import
import "bootstrap/dist/css/bootstrap.css"

//components import
import Frontpage from "../components/frontpage"
import SEO from "../components/seo"

//styles import
import "../styles/styles.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title={SEO.title} />
      <Frontpage />
      <div className="postsContainer" id="news">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
            featuredImage
            category
            author
          }
        }
      }
    }
  }
`
