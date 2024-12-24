import { useState } from 'react'
import Box from './view/components/box/Box'
import flower1 from './assets/images/flower1.avif'
import flower2 from './assets/images/flower2.jpg'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Box title="The animals that give each other gifts" src={flower1} text="We may think that gift giving is a purely human trait, but it turns out many other animals also treat their mates and companions." time="10 mins ago" country="Africa"/>
    <Box title="Russian ship under US sanctions sinks after engine room blast"src={flower2} text="Ursa Major ran into trouble in the Mediterranean between Spain and Algeria, with two crew still missing." time="35 mins ago" country="World"/>
 

  </div>
  )
  
}

export default App
