import { FC } from "react";
import styles from "./Title.module.scss";

export interface TitleProps {
  text: string;
  imageUrl: string;
  time: string;
}

const Title: FC<TitleProps> = ({ text, imageUrl, time }) => {
  return (
    <div className={styles.title}>
      <p className={styles.time}>{time}</p>
      <h1 className={styles.text}> {text} </h1>
      <img className={styles.image} src={imageUrl} alt="userImage" />
    </div>
  );
};

export default Title;
