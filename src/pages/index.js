import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import blogPage from "../components/blogPage"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta name="title" content="WIS Journal" />
      <meta
        name="description"
        content="Welcome to the student run newspaper covering events in Western International School."
      />
    </Helmet>
  </Layout>
)

export default IndexPage
