// src/components/Layout.js
import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import styles from "./Component.module.css"

const NetlifyIdentity = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <div className={styles.netlifyIdentity}>
      {" "}
      <button className="btn" onClick={() => setDialog(true)}>
        <i className="fa fa-sign-in" style={{ marginRight: `0.5em` }}></i>
        <p>{isLoggedIn ? `Hello ${name}, Log out here!` : "Log In"}</p>
      </button>
      <main>{children}</main>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </div>
  )
}

export default NetlifyIdentity
