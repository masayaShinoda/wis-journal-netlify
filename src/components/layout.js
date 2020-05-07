import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { withPrefix, Link } from "gatsby"

//styles import
import "../styles/styles.css"
import resetStyles from "../styles/reset.css"

//components import
import Header from "./header"

const Layout = ({ children }) => (
  <div className="pageContainer">
    <Header></Header>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
