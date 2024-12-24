
import mjImage from './assets/images/MJ.webp'
import './App.css'
import Box from './view/components/box/box'

function App() {


  return (
    <>
    <h1> hi im yonatan</h1>
    <img src={mjImage} alt="mj" />
    <Box text={'yonatan'}/>
    <Box text={'silam'}/>
    </>
  )
}

export default App
