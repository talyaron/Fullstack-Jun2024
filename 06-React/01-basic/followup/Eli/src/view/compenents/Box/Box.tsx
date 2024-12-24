import styles from "./Box.module.scss"
import { FC } from "react";

interface Props{
    text:string;
}
const Box:FC<Props>=({text}) =>{
  return (
    <div className={styles.box}>{text}
    </div>
  );
}

export default Box
