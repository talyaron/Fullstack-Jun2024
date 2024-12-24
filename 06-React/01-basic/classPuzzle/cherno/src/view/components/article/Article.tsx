import React, { FC } from 'react'
import styles from './Article.module.scss'

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  content: string;
  stamp: string;
}

const Article:FC<Props> = ({image, imageAlt, title, content, stamp}) => {
  return (
    <div className={styles.article}>
      <img className={styles.article_image} src={image} alt={imageAlt} />
      <h2 className={styles.article_title}>{title}</h2>
      <p className={styles.article_content}>{content}</p>
      <span className={styles.article_stamp}>{stamp}</span>
    </div>
  )
}

export default Article