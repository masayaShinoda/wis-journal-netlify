import React from "react"
//styles import
import styles from "./Component.module.css"

const NetlifyIdentity = () => {
  return (
    <div className={styles.netlifyIdentity}>
      <a className="btn" href="/admin">
        <i className="fa fa-sign-in" style={{ marginRight: `0.5em` }}></i>
        <p>Log in</p>
      </a>
    </div>
  )
}

export default NetlifyIdentity
