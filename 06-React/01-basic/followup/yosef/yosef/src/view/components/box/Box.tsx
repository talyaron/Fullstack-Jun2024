import { FC } from 'react';
import styles from './Box.module.scss'

interface Props{
    text:string;
}

interface Props2{
    text:string;
    image:string;
    title: string;
}

const Box:FC<Props> = ({text}) => {
    return (
        <div className={styles.box}>{text}</div>
        
    )
}

const Box2:FC<Props2> = ({image, title, text}) => {
    return (
        <div className={styles.box}>
            <img src={image} alt={"test"}/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
        
    )
}
export { Box, Box2 };
