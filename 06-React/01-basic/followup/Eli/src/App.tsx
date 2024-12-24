import { useState } from 'react'
import './App.css'
import Box from './view/compenents/Box/Box';
function calculator()
{
console.log(1+2);
}
function App() {
  const [] = useState(0)

  return (
    <div>
<img  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_dark_color_272x92dp.png" alt="google" />  
 <button id='button' onClick={calculator}>1+2</button>
    <Box text='eeeee'/>

    <Box text='woooo' />
    </div>
  )
}

export default App
