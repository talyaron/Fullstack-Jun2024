import { FC } from "react";
import styles from "./Image.module.scss";



export interface ImageProps {
  imageUrl: string;
}

const Image1: FC<ImageProps> = ({ imageUrl }) => {
  return <div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.image}>
    {/* <img src={imageUrl} alt="imageName" /> */}
  </div>;
};

export default Image1;
