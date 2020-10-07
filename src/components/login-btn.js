import React from "react"
import styles from "./Component.module.css"

const LoginBtn = () => {
  return (
    <div className={styles.LoginBtn}>
      <a className="btn" href="https://wis-journal.admin.datocms.com/sign_in">
        <i className="fa fa-sign-in" style={{ marginRight: `0.5em` }}></i>
        <p>Log in</p>
      </a>
    </div>
  )
}

export default LoginBtn
