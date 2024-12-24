import { useState } from 'react'
import Box from './view/components/box/Box'

import flowerImage from './assets/images/flower.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <h1> hello</h1>
  <p> I am paragraph</p>
  <img alt="flower" src={flowerImage} /> 
  <Box />
  <Box text="Bye"/>
  <Box text="Bye1"/>

</div>
  )
}

export default App
