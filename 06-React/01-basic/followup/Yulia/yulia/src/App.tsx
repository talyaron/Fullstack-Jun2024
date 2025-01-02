import './App.css'
import GrootImage from './assets/images/Groot.jpg'
import Box from './view/components/box/Box'

function App() {

  return (
    <>
      <p>Hi, I am Yulia</p>
      <img src={GrootImage} alt="Groot" />
      <Box text='hi'/>
      <Box text='bye' />
      <Box text='hello' />

    </>
  )
}

export default App
 