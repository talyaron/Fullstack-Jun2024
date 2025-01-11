import { useState } from 'react'
import './App.css'
import Article from './View/componense/Article/Article'

function App() {

  return (
    <div>
      <div className='art'>
        <Article header='The first' pragraph='2' time='35 min ago' city='Tel-Aviv'></Article>
        <Article header='The second' pragraph='2' time='5 min ago' city='World'></Article>
      </div>

    </div>
  )
}

export default App
