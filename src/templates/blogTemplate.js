import React from "react"
import { graphql } from "gatsby"

//components import
import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import "../styles/styles.css"

export default function Product({ pageContext }) {
  const { data } = pageContext
  return (
    <Layout>
      <SEO title={data.title} />
      <div className="postsContainer">
        <div className="blogTemplate">
          <h1 className="blogPostTitle">{data.title}</h1>
          <div className="blogPostSubtitle">
            <div>
              <p>{data.tags}</p>
              <p>By: {data.author}</p>
            </div>
            <p>{data.date}</p>
          </div>
          {/* <div
            className="blogContent"
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}
          <div
            className="blogContent"
            dangerouslySetInnerHTML={{
              __html: data.contentNode.childMarkdownRemark.html,
            }}
          >
            {/* {data.contentNode.childMarkdownRemark.html} */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
