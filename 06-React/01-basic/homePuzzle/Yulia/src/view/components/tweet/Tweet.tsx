import { FC, useState } from 'react'
import styles from './Tweet.module.scss';

export interface Props {
    userName: string;
    profilePicture: string;
    tweetContent: string;
    tweetImage?: string;
    likes?: number;
    comments?: number;
    retweets?: number;
    saveTweet?: boolean;
    sendTweet?: boolean;
}
const Tweet: FC<Props> = ({
    userName,
    profilePicture,
    tweetContent,
    tweetImage,
    likes = 0,
    comments = 0,
    retweets = 0,
    saveTweet = false,
    sendTweet = false,
}) => {
    const [likesCount, setLikesCount] = useState(likes);
    const [commentsCount, setCommentsCount] = useState(comments);
    const [retweetsCount, setRetweetsCount] = useState(retweets);
    const [isSaved, setIsSaved] = useState(saveTweet);
    const [isSent, setIsSent] = useState(sendTweet);

    const handleAction = (action: string) => {
        switch (action) {
            case 'like':
                setLikesCount(likesCount + 1);
                break;
            case 'comment':
                setCommentsCount(commentsCount + 1);
                break;
            case 'retweet':
                setRetweetsCount(retweetsCount + 1);
                break;
            case 'save':
                setIsSaved(!isSaved);
                break;
            case 'send':
                setIsSent(!isSent);
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.tweet}>
            <div className={styles.header}>
                <img
                    src={profilePicture}
                    alt={`${userName}'s profile`}
                    className={styles.profilePicture}
                />
                <span className={styles.userName}>{userName}</span>
            </div>

            <div className={styles.content}>
                <p className={styles.tweetContent}>{tweetContent}</p>
                {tweetImage && (
                    <img
                        src={tweetImage}
                        alt="TweetImage"
                        className={styles.tweetImage}
                    />
                )}
            </div>

            <div className={styles.actions}>
                <button
                    onClick={() => handleAction('like')}
                    className={styles.iconButton}
                    aria-label={`Like tweet, current likes: ${likesCount}`}
                >
                    ❤️ <span>{likesCount}</span>
                </button>
                <button
                    onClick={() => handleAction('comment')}
                    className={styles.iconButton}
                    aria-label={`Comment on tweet, current comments: ${commentsCount}`}
                >
                    💬 <span>{commentsCount}</span>
                </button>
                <button
                    onClick={() => handleAction('retweet')}
                    className={styles.iconButton}
                    aria-label={`Retweet, current retweets: ${retweetsCount}`}
                >
                    🔁 <span>{retweetsCount}</span>
                </button>
                <button
                    onClick={() => handleAction('send')}
                    className={styles.iconButton}
                    aria-label={isSent ? "Message sent" : "Send message"}
                >
                    {isSent ? "✉️ Sent" : "📤 Send"}
                </button>
                <button
                    onClick={() => handleAction('save')}
                    className={styles.iconButton}
                    aria-label={isSaved ? "Unsave tweet" : "Save tweet"}
                >
                    {isSaved ? "📌 Saved" : "💾 Save"}
                </button>
            </div>
        </div>
    );

};


export default Tweet;