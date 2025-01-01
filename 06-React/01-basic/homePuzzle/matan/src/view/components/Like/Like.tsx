import { FC, useState } from 'react';
import styles from './Like.module.scss';
import likeIcon from 'C:/Users/97253/Documents/GitHub/Fullstack-Jun2024/06-React/01-basic/homePuzzle/matan/src/assets/heart.png';

interface Props {
    initialLikes: number;
  }
  
  const LikeButton: FC<Props> = ({ initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
  
    return (
      <div className={styles.button} onClick={() => setLikes(likes + 1)}>
        <img src={likeIcon} alt="Like" className={styles.icon} />
        <span className={styles.text}>{likes}</span>
      </div>
    );
  };
  
  export default LikeButton;