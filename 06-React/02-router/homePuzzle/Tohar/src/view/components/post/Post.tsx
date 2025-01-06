import React, { FC } from 'react'
import styles from './post.module.scss'

interface Props {
    image: string;
    name: string;
    content: string;
}

const Post: FC<Props> = ({ image, name, content }) => {
    return (
        <div className={styles.post_container}>
            <h2 className={styles.post_name}>{name}</h2>
            <p className={styles.post_content}>{content}</p>
        </div>
    )
}

export default Post;