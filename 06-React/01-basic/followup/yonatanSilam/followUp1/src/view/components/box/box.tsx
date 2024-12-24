import { FC } from 'react'
import styles from './box.module.scss'

interface Props{
    text:string
}

const Box:FC<Props> = ({text}) => {
  return (
    <div className={styles.box}>
      {text}
    </div>
  )
}

export default Box
