import { FC } from "react"
import styles from "./Post.module.scss"
interface Props{
    text : string,
    img ?: string
}
const Post:FC<Props> = ({text,img}) => {
  return (
    <div className={styles.postInfo}>
      <div className={styles.postText}>{text}</div>
      <img className={styles.postImage} src={img} alt="Post visual" />
    </div>
  )
}

export default Post