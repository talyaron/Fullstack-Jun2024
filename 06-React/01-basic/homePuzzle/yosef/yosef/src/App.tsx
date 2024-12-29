import './App.css'
import Feed, { feed } from './view/componnet/feed/Feed'
import Storie from './view/componnet/storie/Storie'

function App() {

const array: feed[] = [
  { content: 'Hello there!' , like:0},
  { content: 'bye', like:0 },
  { content: 'wow man!', like:0},
  { content: 'i love you!', like:0},
  ]
  

  return (
    <div className="App">
      {array.map((item, index) => (
        <Feed key={index} content={item.content} like={item.like}/>
      ))}
    </div>
  )
}

export default App
