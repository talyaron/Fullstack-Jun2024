import styles from "./Box.module.scss"
import { FC } from "react";

interface Props{
    title:string;
    text:string;
    date:string;
}
const Box:FC<Props>=({title,text,date}) =>{
  return (
    <div className={styles.box}><h1>{title}</h1>
    <p >{text}</p>
    <small >{date}</small>
    </div>
  );
}

export default Box
