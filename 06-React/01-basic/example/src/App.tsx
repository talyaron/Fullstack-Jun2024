import grootImage from './assets/images/groot.jpg'
import './App.css'

import Article, { ArticleProps } from './view/components/article/Article'
import { useState } from 'react'

function App() { // this is a functional component

  const [backgroundColor, setBackgroundColor] = useState('white')

  function handleChangeColor(event: any) {
    setBackgroundColor(event.target.value)
  }

  const articles: ArticleProps[] = [
    {
      title: 'The first article',
      content: 'This is the first article',
      src: 'https://via.placeholder.com/150'
    },
    {
      title: 'The second article',
      content: 'This is the second article',
      src: 'https://via.placeholder.com/150'
    },
    {
      title: 'The third article',
      content: 'This is the third article',
      src: 'https://via.placeholder.com/150'
    }
  ]

  return ( // this is the JSX that will be rendered
    <>
      <p>text</p>
      <div style={{ backgroundColor: backgroundColor }}>
        <h1>Hi, I am Tal</h1>
        <p>Groot is amazing</p>
        <img alt="Groot dance" src={grootImage} />
        {articles.map((art, index) => <Article key={index} title={art.title} content={art.content} src={art.src} />)}

        <input type="color" onChange={handleChangeColor} />
      </div>
    </>
  )
}

export default App
