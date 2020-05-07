import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Articles from "../components/articles"

//bootstrap import
import "bootstrap/dist/css/bootstrap.css"

//styles import
import "../styles/styles.css"

const IndexPage = () => {
  return (
    <Layout>
      <div className="pageContainer">
        <div className="frontPageContainer">
          <p>
            Welcome to the student run newspaper covering events in Western
            International School.
          </p>
          <Articles></Articles>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
