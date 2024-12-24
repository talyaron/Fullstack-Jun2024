import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function calculator()
{
console.log(1+2);
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi nulla esse soluta aliquid! Enim repudiandae minus quos eum odit, voluptate vel illo dolor? Deserunt doloremque iste laudantium velit similique. </h1>
   <button id='button' onClick={calculator}>1+2</button>
    </div>
  )
}

export default App
