import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

//components import
import { ThemeToggler } from "gatsby-plugin-dark-mode"

//styles import
import headerStyles from "../styles/styles.css"
//import favicons
import "../assets/css/font-awesome.min.css"

//images import
import headerLogoLight from "../images/dark-font-header-logo.svg"
import headerLogoDark from "../images/light-font-header-logo.svg"

const Header = () => (
  <header>
    <div>
      <section>
        <Link to="/">
          <img className="headerLogoLight" src={headerLogoLight}></img>
          <img className="headerLogoDark" src={headerLogoDark}></img>
        </Link>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label
              style={{
                cursor: `pointer`,
                padding: `0`,
                margin: `0`,
                lineHeight: `0`,
              }}
            >
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                style={{ visibility: `hidden` }}
              />
              <i
                className="fa fa-moon-o"
                title="Lights on/off"
                style={{ fontSize: `1.5em` }}
              ></i>
            </label>
          )}
        </ThemeToggler>
      </section>

      <nav>
        <Link to="/">
          {" "}
          <i className="fa fa-home" activeClassName="activLink"></i>Home
        </Link>
        <Link to="/">
          <i className="fa fa-newspaper-o"></i>News
        </Link>
        <Link to="/">
          <i className="fa fa-address-book-o "></i>About
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `WIS Journal`,
}

export default Header
