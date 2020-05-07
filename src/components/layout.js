import React from "react"
import PropTypes from "prop-types"
import { withPrefix, Link } from "gatsby"

//styles import
import layoutStyles from "../styles/styles.css"
import resetStyles from "../styles/reset.css"

//components import
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  )
}
export default Layout
