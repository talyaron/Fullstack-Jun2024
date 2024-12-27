import { FC } from "react";
import styles from './Feed.module.scss'
import profilePic from '../../../assets/pics/profile_pic.png'
import addPic from '../../../assets/pics/addPic.png'
import addLocation from '../../../assets/pics/addLocation.png'
import addDate from '../../../assets/pics/addDate.png'
import addEmoje from '../../../assets/pics/addEmoje.png'
import addProgram from '../../../assets/pics/addProgram.png'
import addPen from '../../../assets/pics/addPen.png'
import addGifPic from '../../../assets/pics/addGifPic.png'

export interface feed{
    content: string;
}

const Feed:FC<feed> = ({content}) => {
    function handelAddPost(){
        const post = document.getElementById('newPost');
        if (!post)
            alert('Please enter a post');
        post.textContent = content;

    }
  return (
    <>
    <div className={styles.feed}>
    <input type="text" name="" id="" defaultValue={content} />
    <img src={profilePic} alt="profile picture" id="test"/>
    <br /><br />
    <button onClick={handelAddPost}>Post</button>
    <button className={styles.icons}><img src={addPic} alt=""/></button>
    <button className={styles.icons}><img src={addDate} alt=""/></button>
    <button className={styles.icons}><img src={addEmoje} alt=""/></button>
    <button className={styles.icons}><img src={addGifPic} alt=""/></button>
    <button className={styles.icons}><img src={addLocation} alt=""/></button>
    <button className={styles.icons}><img src={addPen} alt=""/></button>
    <button className={styles.icons}><img src={addProgram} alt=""/></button>
    <br /><br />
    </div>
    <p id="newPost" className="post"></p>
    </>
  );
};

export default Feed;