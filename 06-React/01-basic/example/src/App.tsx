import grootImage from './assets/images/groot.jpg'
import './App.css'
import Box from './view/components/box/Box'

function App() { // this is a functional component

  return ( // this is the JSX that will be rendered

    <div>
      <h1>Hi, I am Tal</h1>
      <p>Groot is amazing</p>
      <img alt="Groot dance" src={grootImage} />
      <Box text="hi" />
      <Box text="bye" />
      <Box text="hello" />
    </div>
  )
}

export default App
