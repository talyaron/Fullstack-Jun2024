import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '../src/view/compomemts/box/Box'
import ray from './assets/ray.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hay matan</h1>
      <p>Hello to my little dog Ray</p>
      <img src={ray} alt="dog" />
      <Box text="hay"/>
      <Box text="bay"/>
      <Box text="hello"/>

      </div>
  )
}

export default App
