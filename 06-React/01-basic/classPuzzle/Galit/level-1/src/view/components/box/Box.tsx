import React, { FC } from 'react'
import styles from './Box.module.scss'


interface Props{
    title: string;
    text: string;
    time: string;
    country: string;
  }
  const Box:FC<Props> = ({title, text, time, country}) => {
    return (
<div className={styles.box}>
  <h2>{title}</h2>
  {text && <p>{text}</p>}
  <div className="meta">
    <span>{time}</span>
    <span>{country}</span>
  </div>
</div>    )
  }

export default Box