import { FC } from 'react'
import styles from './News.module.scss'
interface News{
  title: string,
  imgURL: string,
  description: string,
  footer: string,
}
const News:FC<News> = ({title, imgURL, description, footer}) => {
  return (
    <div className = {styles.news}>
      <img className = {styles.img} src={imgURL} alt="" />
      <h1 className = {styles.title}>{title}</h1>
      <p className = {styles.description}>{description}</p>
      <p className = {styles.footer}>{footer}</p>
    </div>
  )
}

export default News
