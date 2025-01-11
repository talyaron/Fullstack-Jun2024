import React, { FC } from 'react'
import styles from './article.module.scss'

interface Props{
    header: string,
    pragraph: string,
    time: string,
    city: string
}
const Article:FC<Props> = ({header,pragraph,time,city}) => {
  return (
    <div className={styles.article}>
        <h1>{header}</h1>
        <p>{pragraph}</p>
        <p>{time} | {city}</p>
    </div>
  )
}

export default Article