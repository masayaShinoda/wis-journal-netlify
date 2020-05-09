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
      <Link to={post.frontmatter.path}>
        <CardBody className={styles.CardBody}>
          <CardTitle style={{ margin: `0`, padding: `0` }}>
            <h2 className={styles.CardTitle}>{post.frontmatter.title}</h2>
          </CardTitle>
          <CardSubtitle className={styles.CardSubtitle}>
            <p>{post.frontmatter.tags}</p>
          </CardSubtitle>
          <CardText>
            <p>{post.frontmatter.date}</p>
          </CardText>
        </CardBody>
      </Link>
      <CardImg
        className={styles.CardImg}
        src={post.frontmatter.featuredImage}
        alt="image"
      />
    </Card>
  </CardColumns>
)

export default PostLink
