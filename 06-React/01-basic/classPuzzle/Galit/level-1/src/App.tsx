import { useState } from 'react'
import Box from './view/components/box/Box'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1> News</h1>
    <Box title="The animals that give each other gifts" text="We may think that gift giving is a purely human trait, but it turns out many other animals also treat their mates and companions." time="10 mins ago" country="Africa"/>
    <Box title="Russian ship under US sanctions sinks after engine room blast" text="Ursa Major ran into trouble in the Mediterranean between Spain and Algeria, with two crew still missing." time="35 mins ago" country="World"/>
    <Box title="Ex-Abercrombie & Fitch CEO has dementia, lawyers say" text="The legal team behind Mike Jeffries, arrested earlier this year on sex trafficking charges, has requested a hearing to determine his fitness to stand trial." time="2 hrs ago" country="US & Canada"/>
    <Box title="The US town where it's the law to own a gun" text="Kennesaw, Georgia became the first American town to require people to own a gun in the 1980s." time="16 hrs ago" country="US & Canada"/>

  </div>
  )
}

export default App
