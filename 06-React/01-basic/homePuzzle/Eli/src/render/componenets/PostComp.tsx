import styles from "./Post.module.scss";
import { FC, useState } from "react";
interface Props {
  pfp?: string;
  name: string;
  onSubmit: (message: string) => void;
}

const Post: FC<Props> = ({ pfp, name, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handlePost = () => {
    onSubmit(inputValue);
    setInputValue(""); 
  };
  return (
    <div className={styles.poster}>
      <h1>post {name}</h1>
      <div className={styles.row}>
        <input
          type="button"
          className={styles.button}
          value="Post"
          onClick={handlePost}
        />

        <input
          type="text"
          id="postContent"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <img src={pfp} alt="user profile picture" />
      </div>
    </div>
  );
};

export default Post;
