import React from "react"
import { graphql } from "gatsby"

//components import
import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import "../styles/styles.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="postsContainer">
        <div className="blogTemplate">
          <h1 className="blogPostTitle">{frontmatter.title}</h1>
          <div className="blogPostSubtitle">
            <div>
              <p>{frontmatter.tags}</p>
              <p>By: {frontmatter.author}</p>
            </div>
            <p>{frontmatter.date}</p>
          </div>
          <div
            className="blogContent"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        tags
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`
