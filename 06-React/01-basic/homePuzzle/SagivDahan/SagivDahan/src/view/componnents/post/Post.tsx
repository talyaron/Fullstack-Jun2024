import React, { FC } from 'react'
import styles from '../post.module.scss'

export interface PostInterface{
    date:string;
    fullName: string;
    username: string;
    text:string;
    imageUrl?: string;
  }

const Post:FC<PostInterface> = ({date, fullName, username, text, imageUrl}) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__banner}>
        <p className={styles.date}>{date}</p>
        <p>{fullName}</p>
        <p>{username}</p>
        <p>{text}</p>
        <img src={imageUrl} alt='image'/>
      </div>
    </div>
  )
}

export default Post