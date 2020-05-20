import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import NetlifyIdentity from "./netlify-identity"

//styles import
import styles from "./Component.module.css"

const Frontpage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          author
          copyright
          siteUrl
        }
      }
    }
  `)
  return (
    <div className={styles.bgContainer}>
      <div className={styles.frontpageContainer}>
        <h2>{data.site.siteMetadata.description}</h2>
        <NetlifyIdentity></NetlifyIdentity>
      </div>
    </div>
  )
}

export default Frontpage
