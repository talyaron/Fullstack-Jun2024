import { FC } from "react";
import styles from "./art.module.scss";

interface Props {
  title: string;
  text: string;
  time: string;
}

const Art: FC<Props> = ({ text, title, time }) => {
  return (
    <div className={styles.art}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text}>{text}</div>
      <p className={styles.time}>{time}</p>
    </div>
  );
};

export default Art;
