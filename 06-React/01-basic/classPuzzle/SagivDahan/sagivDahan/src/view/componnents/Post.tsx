import React, { FC } from 'react'
import styles from "./Post.module.scss"

interface Post{
    headTitle: string;
    imageUrl: string;
    postDesctiption: string;
}

const Post:FC<Post> = ({headTitle, imageUrl, postDesctiption}) => {
  return (
    <div className={styles.post}>
    <img src={imageUrl} className={styles.post__image} alt="image"/>
    <h1 className={styles.post__title}>{headTitle}</h1>
    <p className={styles.post__description}>{postDesctiption}</p>
    </div>
  )
}

export default Post