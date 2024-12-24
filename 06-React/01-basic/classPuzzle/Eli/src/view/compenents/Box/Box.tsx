import styles from "./Box.module.scss"
import { FC } from "react";

interface Props{
    title:string;
    text:string;
    date:string;
    img:string;
}
const Box:FC<Props>=({title,text,date,img}) =>{
  return (
    <div className={styles.box}><h1>{title}</h1>
    <img src={img} alt="an image" />
    <p >{text}</p>
    <small >{date}</small>
    </div>
  );
}

export default Box
