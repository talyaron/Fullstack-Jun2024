import { FC } from 'react';
import LikeButton from '../Like/Like';
import CommentButton from '../Comment/Comment';
import ShareButton from '../Share/Share';
import styles from '../Post/Post.module.scss';

interface Props {
  username: string;
  image: string;
  initialLikes: number;
  initialComments: number;
  initialShares: number;
}

const Post: FC<Props> = ({ username, image, initialLikes, initialComments, initialShares }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.username}>{username}</h3>
      <img src={image} alt="Post" className={styles.image} />
      <div className={styles.buttons}>
        <LikeButton initialLikes={initialLikes} />
        <CommentButton initialComments={initialComments} />
        <ShareButton initialShares={initialShares} />
      </div>
    </div>
  );
};

export default Post;