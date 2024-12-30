import styles from "./Post.module.scss"
import { type FC } from "react";

interface Props{
    pfp?:string;
    name:string;
    message:string;
}

const Posted:FC<Props>=({pfp,name,message})=>{
    return(<div className={styles.post}>
         <h2> {name}</h2>
         <div className={styles.row}>

       <h1>{message}</h1>
        <img src={pfp} alt="user profile picture" />

        </div>
        
    </div>);
}

export default Posted;