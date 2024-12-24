import styles from './box.module.scss'
import { FC } from 'react';
import React from 'react'

interface Props{
    text:string;
}
const Box:FC<Props> = ({text}) => {
  return (
    <div className={styles.box}>
      {text}
    </div>
  )
}

export default Box
