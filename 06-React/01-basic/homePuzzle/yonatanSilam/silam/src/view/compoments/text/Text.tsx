import { FC } from 'react'
import styles from "./Text.module.scss";

export interface TextProps {
    text: string;
  }

  const Text1: FC<TextProps> = ({text}) => {
    return (
      <div>
        <p className={styles.p}>{text}</p>
      </div>
    );
  };

export default Text1
