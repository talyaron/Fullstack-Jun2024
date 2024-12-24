import React, { FC } from 'react'
import styles from "./Post.module.scss"

interface Post{
    headTitle: string;
    imageUrl: string;
    postDesctiption: string;
}

const Post:FC<Post> = ({headTitle, imageUrl, postDesctiption}) => {
  return (
    <div className={styles.box}>
    <img src={imageUrl} alt="image"/>
    <h1 className='title'>{headTitle}</h1>
    <p className='postDesctiption'>{postDesctiption}</p>
    </div>
  )
}

export default Post