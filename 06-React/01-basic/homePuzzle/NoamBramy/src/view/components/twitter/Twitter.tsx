import { FC, useState } from 'react'
import styles from './Twitter.module.scss'


interface Posts{
username: string,
picture: string,
tweet: string,
tweetURL: string,
like: number,
share: number,
comment: number,
}


const Twitter: FC<Posts> = ({username, picture, tweet, tweetURL, like, share, comment}) => {
  const [likesCount, setLikes] = useState(like)
  const [sharesCount, setShares] = useState(share)
  const [commentsCount, setComments] = useState(comment)

  const handleLikes = () => {
    setLikes(likesCount + 1)
  }
  const handleShares = () => {
    setShares(sharesCount + 1)
  }
  const handleComments = () => {
    setComments(commentsCount + 1)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
      <h1 className={styles.userinfo}>{username}</h1>
      <p className={styles.tweetText}>{tweet}</p>
      <img className={styles.tweetURL} src={tweetURL} alt="" />
      <img className={styles.profileImage} src={picture} alt="" />
      <div className={styles.buttons}>
      <span className={styles.likes} onClick={handleLikes}>❤️ {likesCount}</span>
      <span className={styles.comments} onClick={handleComments}>💬 {commentsCount}</span>
      <span onClick={handleShares}>🔁 {sharesCount}</span>
      </div>
    </div>
    </div>
  )
}

export default Twitter