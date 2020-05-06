import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import BlogPage from "../components/blogPage"

//bootstrap import
import "bootstrap/dist/css/bootstrap.css"

//styles import
import "../styles/styles.css"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta name="title" content="WIS Journal" />
        <meta
          name="description"
          content="Welcome to the student run newspaper covering events in Western International School."
        />
      </Helmet>
      <BlogPage></BlogPage>
    </Layout>
  )
}

export default IndexPage
