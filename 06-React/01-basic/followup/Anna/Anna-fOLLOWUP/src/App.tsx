
import cartier from './assets/images/cARTIER.png'
import './App.css'
import Box from './View/components/box/Box'


function App() {


  return (
    <div>
      <h1>Its Anna!</h1>
      <p>I love watches</p>
      <img src={cartier} alt="cartier watch" />
      <Box text="hi"/>
      <Box text= "Bey"></Box>
    </div>
  )
}

export default App
