import { FC } from "react"
import styles from "./Title.module.scss"

interface Props{
    title : string,
    subTitle : string,
    postTime : string
}

const Title:FC<Props> = ({title,subTitle,postTime}) => {
  return (
    <div className={styles.title}>
      <div className={styles.mainTitle}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.postTime}>{postTime} hours ago</div>
    </div>
  )
}

export default Title