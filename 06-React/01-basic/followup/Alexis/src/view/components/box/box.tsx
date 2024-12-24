import styles from './Box.module.scss'
import { FC } from 'react';
import React from 'react'

interface Props{
    text:string;
    img:string;
    description:string;
}
const Box:FC<Props> = ({img, text, description}) => {
  return (
    <div className={styles.box}>
     <img src={img} alt={text} className={styles.image} />
      <p>{text}</p>
<p className={styles.desc}>{description}</p>
    </div>
  )
}

export default Box
