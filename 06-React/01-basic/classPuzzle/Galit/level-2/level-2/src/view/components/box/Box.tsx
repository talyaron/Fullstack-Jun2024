import React, { FC } from 'react'
import styles from './Box.module.scss'


interface Props{
    title: string;
    src: string;
    text: string;
    time: string;
    country: string;
  }
  const Box:FC<Props> = ({title, src, text, time, country}) => {
    return (
<div className={styles.box}>
  <h2>{title}</h2>
  <img src={src} alt={title} className={styles.image} />
  {text && <p>{text}</p>}
  <div className="meta">
    <span>{time}</span> <div>  |  </div>
    <span>{country}</span>
  </div>
</div>    )
  }

export default Box