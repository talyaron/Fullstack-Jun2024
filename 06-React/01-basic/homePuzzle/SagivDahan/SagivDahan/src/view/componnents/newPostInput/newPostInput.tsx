import React, { FC } from 'react'
import {PostInterface} from '../post/Post'
import styles from './newPostInput.module.scss'

const newPostInput:FC<PostInterface> = ({text, imageUrl}) => {
  return (
    <div className={styles.newPostInput}>
        <textarea name="textInput" id="textInput">{text}</textarea>
        <input type="text" value={imageUrl} placeholder='Photo Link'/>
        <button className='sendPost' id='sendPost'></button>
    </div>
  )
}

export default newPostInput