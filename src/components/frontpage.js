import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import LoginBtn from "./login-btn"

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
        <LoginBtn></LoginBtn>
      </div>
    </div>
  )
}

export default Frontpage
