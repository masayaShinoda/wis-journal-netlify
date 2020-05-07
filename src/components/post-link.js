import React from "react"
import { Link } from "gatsby"

//styles import
import "../styles/styles.css"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} className="postLink">
      <h2>{post.frontmatter.title}</h2>
      <p>({post.frontmatter.date})</p>
    </Link>
  </div>
)

export default PostLink
