import React from "react"
import { Link } from "gatsby"
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap"

//styles import
import "../styles/styles.css"
import styles from "./Component.module.css"

const PostLink = ({ post }) => (
  <CardColumns className={styles.Columns}>
    <Card className={styles.Card}>
      <CardBody className={styles.CardBody}>
        <CardTitle>
          <Link to={post.frontmatter.path}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        </CardTitle>
        <CardSubtitle>
          <p>{post.frontmatter.tags}</p>
        </CardSubtitle>
        <CardText>
          <p>{post.frontmatter.date}</p>
        </CardText>
      </CardBody>
      <CardImg
        className={styles.CardImg}
        src={post.frontmatter.featuredImage}
        alt="image"
      />
    </Card>
  </CardColumns>
)

export default PostLink
