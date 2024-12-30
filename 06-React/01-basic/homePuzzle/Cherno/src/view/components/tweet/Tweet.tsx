import React, { FC } from 'react'
import styles from './Tweet.module.scss'

interface Props {
  image: string;
  imageAlt: string;
  name: string;
  content: string;
  stamp: string;
}

const Tweet:FC<Props> = ({image, imageAlt, name, content, stamp}) => {
  return (
    <div className={styles.tweet}>
      <h2 className={styles.tweet_name}>{name}</h2>
      <span className={styles.tweet_stamp}>{stamp}</span>
      <p className={styles.tweet_content}>{content}</p>
      <img className={styles.tweet_image} src={image} alt={imageAlt} />
    </div>
  )
}

export default Tweet