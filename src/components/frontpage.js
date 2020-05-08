import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
    <div
      style={{
        width: `65%`,
        marginTop: `2.5vmin`,
        padding: `2.5vmax 3.75vmax`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <h2>{data.site.siteMetadata.description}</h2>
    </div>
  )
}

export default Frontpage
