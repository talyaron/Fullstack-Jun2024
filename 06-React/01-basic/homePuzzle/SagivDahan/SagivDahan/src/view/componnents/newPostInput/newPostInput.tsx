import React, { FC, useState } from 'react'
import {PostInterface} from '../post/Post'
import styles from './newPostInput.module.scss'

interface NewPostInputProps {
  onAddPost: (newPost: Omit<PostInterface, 'date'>) => void;
}

const NewPostInput: FC<NewPostInputProps> = ({ onAddPost }) => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      onAddPost({
        fullName: 'Idan Chan',
        username: '@user',
        text,
        imageUrl: imageUrl || undefined,
      });
      setText('');
      setImageUrl('');
    }
  };

  return (
    <div className={styles.newPostInput}>
      <textarea name="textInput" id="textInput" value={text} onChange={(e) => setText(e.target.value)} placeholder="What is happening?!" className={styles.newPostInput__textArea}/>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Photo Link" className={styles.newPostInput__imgLink}/>
      <button className={styles.newPostInput__btn} id="sendPost" onClick={handlePost}>Send Post</button>
    </div>
  );
};

export default NewPostInput