import React from 'react'
import Article from './Article'
import ladyImage from '../../../assets/images/lady.png';
import wineImage from '../../../assets/images/wine.png';
import styles from './Articles.module.scss'

const Articles = () => {
return (
  <div className={styles.articles}>
    <h1 className={styles.articles_title}>Festive favourites</h1>
    <div className={styles.articles_container}>
      <Article 
        image={ladyImage} 
        imageAlt='lady' 
        title='The 80s Christmas TV horror that terrified Britain'
        content="First airing on Christmas Eve 1989, the original TV adaptation of Susan Hill's creepy novel The Woman in Black contains what some consider one of the greatest scares in screen history."
        stamp='6hrs ago | Culture'
      />
      <Article 
        image={wineImage}  
        imageAlt='wine' 
        title='How bubbles make wine seem better'
        content='A flute or coupe filled with a sparkling wine has become the very essence of celebration, but the bubbles can affect your enjoyment, how it tastes and teach us about other planets.'
        stamp='31 Dec 2021 | Future'
        />
      </div>
  </div>
)
}

export default Articles