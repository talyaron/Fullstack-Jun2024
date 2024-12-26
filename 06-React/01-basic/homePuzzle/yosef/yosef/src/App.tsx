import './App.css'
import Feed, { feed } from './view/componnet/feed/Feed'

function App() {

const array: feed[] = [
  { content: 'Hello there!' },
  { content: 'bye' },
  { content: 'wow man!' },
  { content: 'i love you!' },
  
  // add more feeds here
  ]

  return (
    <div className="App">
      {array.map((item) => (
        <Feed content={item.content} />
      ))}
    </div>
  )
}

export default App
