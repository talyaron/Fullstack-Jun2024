
    import { useState, useRef } from "react";
    import type { FC } from "react";
    import styles from './Post.module.scss'
    import profilePic from '../../../../../pics/profile_pic.png'
    import addPic from '../../../../../pics/addPic.png'
    import addLocation from '../../../../../pics/addLocation.png'
    import addDate from '../../../../../pics/addDate.png'
    import addEmoje from '../../../../../pics/addEmoje.png'
    import addProgram from '../../../../../pics/addProgram.png'
    import addPen from '../../../../../pics/addPen.png'
    import addGifPic from '../../../../../pics/addGifPic.png'

    export interface Feed {
        content: string;
        like: number;
    }

    const Post: FC<Feed> = ({ content, like }) => {
        const [posts, setPosts] = useState<string[]>([content]); // שמירת הפוסטים כמערך
        const [likeCount, setLikeCount] = useState(0);
        const inputRef = useRef<HTMLInputElement>(null);

        const handleLike = () => {
            setLikeCount(likeCount + 1);
        };

        const addNewPost = (text: string) => {
        if (text.trim()) {
            const datetime = new Date().toLocaleString('he-IL');
            setPosts(prevPosts => [...prevPosts, `${text.trim()} פורסם בתאריך (${datetime})`]);
        }
    };

        const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter' && inputRef.current) {
                event.preventDefault();
                addNewPost(inputRef.current.value);
                inputRef.current.value = '';
            }
        };

        const handlePostClick = () => {
            if (inputRef.current) {
                addNewPost(inputRef.current.value);
                inputRef.current.value = '';
            }
        };

        return (
            <>
                <div className={styles.feed}>
                    <input 
                        className={styles.input} 
                        type="text" 
                        ref={inputRef}
                        onKeyDown={handleKeyPress}
                        placeholder="כתוב את הפוסט שלך כאן..."
                    />
                    <img src={profilePic} alt="profile picture" />
                    <h2 style={{ color: 'white' }}>Press enter to send your post</h2>
                    <button onClick={handlePostClick}>Post</button>
                    <button className={styles.icons}><img src={addPic} alt="הוסף תמונה" /></button>
                    <button className={styles.icons}><img src={addDate} alt="הוסף תאריך" /></button>
                    <button className={styles.icons}><img src={addEmoje} alt="הוסף אימוג'י" /></button>
                    <span className={styles.like} onClick={handleLike}>👍{likeCount}</span>
                    <button className={styles.icons}><img src={addGifPic} alt="הוסף GIF" /></button>
                    <button className={styles.icons}><img src={addLocation} alt="הוסף מיקום" /></button>
                    <button className={styles.icons}><img src={addPen} alt="ערוך" /></button>
                    <button className={styles.icons}><img src={addProgram} alt="הוסף תוכנית" /></button>
                    <br /><br />
                </div>
                <div className="posts">
                    {posts.map((post, index) => (
                        <pre key={index} style={{ fontSize: '2rem' }} className="post">
                            {post}
                        </pre>
                    ))}
                </div>
            </>
        );
    };

    export default Post;