import './App.css'
import profileImage from "./assets/profile.png"
import Box from './view/componnents/box/Box'

function App() {

  return (
    <>
      <h1>hello</h1>
      <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="mount" />
      <img src={profileImage} alt="Sagiv's Photo" />
      <Box text="idan"></Box>
      <Box text="chan"></Box>
      <Box text="ban"></Box>
      <Box text="kan"></Box>
    </>
  )
}

export default App
