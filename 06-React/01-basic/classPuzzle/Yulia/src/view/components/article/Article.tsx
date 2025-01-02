import {FC} from 'react'
import styles from './Article.module.scss'

export interface ArticleProps {
    title: string;
    text: string;
    time?: string;
    place?: string;
}

export const Article: FC<ArticleProps> = ({title, text, time, place}) => {
  return (
      <div className={styles.article}>
            <h1 className={styles.article__h1}>{title}</h1>
            <p className={styles.article__text}>{text}</p>
            <p className={styles.article__time}>{time}</p>
            <p className={styles.article__place}>{place}</p>
          
    </div>
  )
}

export default Article