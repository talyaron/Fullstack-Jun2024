import './App.css'
import newPostInput from './view/componnents/newPostInput/newPostInput'
import Post from './view/componnents/post/Post'

function App() {

  return (
    <>
    <newPostInput></newPostInput>
      <Post date={"02/01/2024"} fullName='Idan Chan' username='@admin' text='text'></Post>
    </>
    
  )
}

export default App
