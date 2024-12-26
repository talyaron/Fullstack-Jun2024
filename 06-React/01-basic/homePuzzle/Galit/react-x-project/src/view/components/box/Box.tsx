import React, { FC, useState } from 'react';
import styles from './Box.module.scss';

interface Props {
  userName: string;
  twitterHandle: string;
  profilePicture: string;
  tweet: string;
  tweetImage?: string;
  like: number;
  comment: number;
  share: number;
  save: boolean;
  send: boolean;
}

const Box: FC<Props> = ({
  userName,
  twitterHandle,
  profilePicture,
  tweet,
  tweetImage,
  like,
  comment,
  share,
  save,
  send
}) => {
  const [likeCount, setLikeCount] = useState(like);
  const [commentCount, setCommentCount] = useState(comment);
  const [shareCount, setShareCount] = useState(share);
  const [isSent, setIsSent] = useState(send);
  const [isShared, setIsShared] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleComment = () => {
    setCommentCount(commentCount + 1);
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
    setIsShared(true);
  };
  const handleSend = () => {
    setIsSent(!isSent);  
  };
  const handleSaved = () => {
    setIsSaved(!isSaved);  
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <img
          className={styles.profileImage}
          src={profilePicture}
          alt={`${userName}'s profile`}
        />
        <div>
          <div className={styles.userInfo}>
            <h3>{userName}</h3>
            <p className={styles.twitterHandle}>{twitterHandle}</p>
          </div>
          <p className={styles.tweetText}>{tweet}</p>
          {tweetImage && (
            <img className={styles.tweetImage} src={tweetImage} alt="Tweet attachment" />
          )}
          <div>
            <span onClick={handleLike}>❤️ {likeCount}</span>
            <span onClick={handleComment}>💬 {commentCount}</span>
            <span onClick={handleShare}>🔁 {shareCount}</span>
            <span onClick={handleSend}>
              {isSent ? "✉️ Sent" : "📤 Send"}
            </span>
            <span onClick={handleSaved}>
              {isSaved ? "📌 saved" : "💾 Save"}
            </span>
            {save && <span>📌 Saved</span>}
            {isShared && <span>🔁 Shared</span>} {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
