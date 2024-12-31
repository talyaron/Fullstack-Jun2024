import { FC, useState } from 'react';
import styles from '../Comment/Comment.module.scss';
import commentIcon from 'C:/Users/97253/Documents/GitHub/Fullstack-Jun2024/06-React/01-basic/homePuzzle/matan/src/assets/chat.png';

interface Props {
  initialComments: number;
}

const CommentButton: FC<Props> = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments);

  return (
    <div className={styles.button} onClick={() => setComments(comments + 1)}>
      <img src={commentIcon} alt="Comment" className={styles.icon} />
      <span className={styles.text}>{comments}</span>
    </div>
  );
};

export default CommentButton;