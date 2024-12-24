import { FC } from 'react';
import  styles  from './box.module.scss';

interface Props{
    text:string;
}

export const Box:FC<Props> = ({text}) => {
    return(
        <div className={styles.Box}>{text} </div>
    )
}