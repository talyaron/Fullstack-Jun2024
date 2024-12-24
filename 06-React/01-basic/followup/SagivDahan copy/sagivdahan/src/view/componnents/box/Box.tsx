import React, { FC } from 'react'
import styles from "./Box.module.scss"

interface Props{
    text:string;
}

const Box:FC<Props> = ({text}) => {
  return (
    <div className={styles.box}>
      <textarea name="input" id="textinput"></textarea>
    </div>
  )
}

export default Box