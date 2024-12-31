import Post from './view/components/Post/Post';
import './App.css';
import post1 from './assets/post1.png';
import post2 from './assets/post2.png';


const posts = [
  {
    id: 1,
    username: 'Israel Bidur',
    image: post1,
    initialLikes: 0,
    initialComments: 0,
    initialShares: 0,
  },
  {
    id: 2,
    username: '13 News',
    image: post2,
    initialLikes: 0,
    initialComments: 0,
    initialShares: 0,
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>My Post</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          image={post.image}
          initialLikes={post.initialLikes}
          initialComments={post.initialComments}
          initialShares={post.initialShares}
        />
      ))}
    </div>
  );
};

export default App;