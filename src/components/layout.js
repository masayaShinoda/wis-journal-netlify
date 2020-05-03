import React from "react"

//components import
import { ThemeToggler } from "gatsby-plugin-dark-mode"

//styles import
import layoutStyles from "../styles/styles.css"
import resetStyles from "../styles/reset.css"

const Layout = () => (
  <div>
    {" "}
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          <p>Dark</p>
        </label>
      )}
    </ThemeToggler>
  </div>
)

export default Layout
