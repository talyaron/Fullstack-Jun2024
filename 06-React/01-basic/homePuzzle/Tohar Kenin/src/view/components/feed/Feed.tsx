import { FC } from 'react';
import styles from './feed.module.scss'
import Post from '../post/Post';


const Feed: FC = ({ }) => {


    return (
        <div className={styles.container}>
            <Post image="url" name="" content="" />
        </div>
    )
}

export default Feed;