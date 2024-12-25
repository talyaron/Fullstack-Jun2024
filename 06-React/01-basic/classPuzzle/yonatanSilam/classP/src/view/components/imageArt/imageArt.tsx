import { FC } from "react";
import styles from "./imageArt.module.scss";

interface Props {
  imgUrl: string;
  title: string;
  text: string;
  time: string;
}

const ImageArt: FC<Props> = ({ text, title, time, imgUrl }) => {
  return (
    <div className={styles.art}>
      <img src={imgUrl} alt="art" />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text}>{text}</div>
      <p className={styles.time}>{time}</p>
    </div>
  );
};

export default ImageArt;
