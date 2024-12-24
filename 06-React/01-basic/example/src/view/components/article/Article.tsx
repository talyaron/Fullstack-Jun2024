import { FC, useState } from 'react'
import styles from './Article.module.scss'


export interface ArticleProps {
    title: string;
    content: string;
    src: string;
}



const Article: FC<ArticleProps> = ({title, content, src}) => {
    const [count, setCount] = useState(0); 
    const [random, setRandom] = useState(0);

    
    function handleAddCount(){
        setCount(count => count +1); // --> count = count + 1 and update UI
        setRandom(Math.ceil(Math.random()*1000));
    }

    return (
        <div className={styles.article} onClick={handleAddCount}>
            <img src={src} alt="article" />
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{content}</p>
                <p>Count: {count}</p>
                <p>Random: {random}</p>
            </div>

        </div>
    )
}

export default Article