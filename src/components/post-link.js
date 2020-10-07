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
    <Link to={post.id}>
      <Card className={styles.Card}>
        <CardBody className={styles.CardBody}>
          <CardTitle style={{ margin: `0`, padding: `0` }}>
            <h2 className={styles.CardTitle}>{post.title}</h2>
          </CardTitle>
          <CardSubtitle className={styles.CardSubtitle}>
            <p className={styles.CardTags}>{post.category}</p>
            <p className={styles.CardAuthor}>By: {post.author}</p>
          </CardSubtitle>
          <CardText className={styles.CardText}>
            <p>{post.date}</p>
          </CardText>
        </CardBody>
        <CardImg
          className={styles.CardImg}
          src={post.featuredimage.url}
          alt="image"
        />
      </Card>
    </Link>
  </CardColumns>
)

export default PostLink
