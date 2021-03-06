import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import PostLink from "../components/post-link"

//bootstrap import
import "bootstrap/dist/css/bootstrap.css"

//components import
import Frontpage from "../components/frontpage"
import SEO from "../components/seo"

//styles import
import "../styles/styles.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsArticle {
        edges {
          node {
            id
            title
            date(formatString: "DD/MM/YYYY")
            author
            category
            content
            locale
            featuredimage {
              url
            }
          }
        }
      }
    }
  `)

  const Posts = data.allDatoCmsArticle.edges
    .filter(edge => !!edge.node.date) // You can filter your posts based on some criteria
    .map(edge => {
      if (edge.node.title) {
        return <PostLink key={edge.node.id} post={edge.node} />
      }
    })

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
