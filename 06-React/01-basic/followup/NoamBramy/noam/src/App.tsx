import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Box from './view/components/Box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Noam</p>
    <img src={reactLogo} alt="" />
    <Box text="nice"></Box>
    <Box text="hello"></Box>
    <Box text="welcome"></Box>
    <Box text="idiot"></Box>

    </>
  )
}

export default App
