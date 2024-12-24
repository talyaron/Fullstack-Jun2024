import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './view/components/box/box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    I AM GROOT!
          <img src='https://i.ebayimg.com/00/s/MTQwMFgxNDAw/z/WKQAAOSwmCVkKEKz/$_57.JPG?set_id=880000500F' className="logo" alt="Baby Groot" />
        <Box text="hey"/>
    </>
  )
}

export default App
