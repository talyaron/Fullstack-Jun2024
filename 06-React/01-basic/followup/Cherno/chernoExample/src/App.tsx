import { useState } from 'react'
import personImage from './assets/images/person.png'
import './App.css'
import Box from './view/components/box/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi! I am Cherno!</h1>
      <img src={personImage} alt="img" />
      <Box text="test"/>
      <Box text="wow"/>
      <Box/>
    </>
  )
}

export default App
