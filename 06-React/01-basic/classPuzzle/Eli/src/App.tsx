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
    <div className='container'>
      
    <Box img='https://images.squarespace-cdn.com/content/v1/5bccf44aaadd343d1754394a/9a97d007-27d9-4c9e-9e20-cdf042970488/how+to+look+like+a+powerful+woman.jpg' title='eeeee'text='eeeeeeeeeeeeeeee' date='12/12/2024'/>

    <Box img='https://images.squarespace-cdn.com/content/v1/5bccf44aaadd343d1754394a/9a97d007-27d9-4c9e-9e20-cdf042970488/how+to+look+like+a+powerful+woman.jpg' title='woooo' text='woooooooooooooooooo' date='11/11/2011' />
    </div>
  )
}

export default App
