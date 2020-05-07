import React from "react"
import { Link } from "gatsby"

//styles import
import "../styles/styles.css"

const PostLink = ({ post }) => (
  <div>
    <ul className="postsList">
      <li>
        <Link to={post.frontmatter.path}>
          <h2>{post.frontmatter.title}</h2>
          <p>({post.frontmatter.date})</p>
        </Link>
      </li>
    </ul>
  </div>
)

export default PostLink
