import React, { useState } from 'react';
import './App.css'
import NewPostInput from './view/componnents/newPostInput/newPostInput'
import Post from './view/componnents/post/Post'
import { PostInterface } from './view/componnents/post/Post';

function App() {
  
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const addPost = (newPost: Omit<PostInterface, 'date'>) => {
    const postWithDate = { ...newPost, date: new Date().toLocaleDateString() };
    setPosts([postWithDate, ...posts]); 
  };

  return (
    <>
      <NewPostInput onAddPost={addPost} />
      <div className="posts-list">
        {posts.map((post, index) => (
          <Post key={index} date={post.date} fullName={post.fullName} username={post.username} text={post.text} imageUrl={post.imageUrl}/>
        ))}
      </div>
    </>
  );
};

export default App
