import React, { FC } from 'react'
import styles from './Post.module.scss'

export interface PostInterface{
    date:string;
    fullName: string;
    username: string;
    text:string;
    imageUrl?: string;
  }

const Post:FC<PostInterface> = ({date, fullName, username, text, imageUrl}) => {
  return (
    <>
    <div className='styles.post'>
      <div className={styles.post__banner}>
        <p className={styles.post__date}>{date}</p>
        <p className={styles.post__name}>{fullName}</p>
        <p className={styles.post__username}>{username}</p>
        <p className={styles.post__text}>{text}</p>
        <img src={imageUrl} alt='image' className={styles.post__img}/>
      </div>
    </div>
    </> 
  )
}

export default Post