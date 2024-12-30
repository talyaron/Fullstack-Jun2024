import React from 'react'
import Tweet from './Tweet';
import ladyImage from '../../../assets/images/lady.png';
import wineImage from '../../../assets/images/wine.png';
import styles from './Tweets.module.scss'


const tweets = [
  {
    image:ladyImage,
    imageAlt:'lady',
    name:'Lady',
    content:"First airing on Christmas Eve 1989, the original TV adaptation of Susan Hill's creepy novel The Woman in Black contains what some consider one of the greatest scares in screen history.",
    stamp:'6hrs ago',
  },
  {
    image:wineImage,
    imageAlt:'wine',
    name:'wine Man',
    content:'A flute or coupe filled with a sparkling wine has become the very essence of celebration, but the bubbles can affect your enjoyment, how it tastes and teach us about other planets.',
    stamp:'31 Dec 2021',
  }
]

const Tweets = () => {
  return (
    <div className={styles.tweets}>
      <h1 className={styles.tweets_name}>Hi!</h1>
      <div className={styles.tweets_container}>
        {tweets.map((tweet) => (
          <Tweet
            name={tweet.name}
            content={tweet.content}
            stamp={tweet.stamp}
            image={tweet.image}
            imageAlt={tweet.imageAlt}
          />
        ))}
      </div>
    </div>
  )
}




export default Tweets