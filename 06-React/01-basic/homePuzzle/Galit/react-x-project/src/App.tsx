import { useState } from 'react';
import Box from './view/components/box/Box';
import profile1 from './assets/images/profile1.png';
import profile2 from './assets/images/profile2.png';
import profile3 from './assets/images/profile3.png';
import profile4 from './assets/images/profile4.png';

function App() {
  return (
    <div>
      <Box
        userName="John Doe"
        twitterHandle="@johndoe"
        profilePicture={profile1}
        tweet="Excited to share my first tweet with the world! 🚀"
        tweetImage="https://via.placeholder.com/300"
        like={120}
        comment={45}
        share={30}
        save={true}
        send={false}
      />
      <Box
        userName="Jane Smith"
        twitterHandle="@janesmith"
        profilePicture={profile2}
        tweet="React has made my development process so much easier! Can't wait to build more. 💻"
        like={200}
        comment={60}
        share={40}
        save={false}
        send={true}
      />
      <Box
        userName="Tech Trends"
        twitterHandle="@techtrends"
        profilePicture={profile3}
        tweet="AI is revolutionizing industries faster than we can imagine. Stay informed, stay ahead. 🌍"
        tweetImage="https://via.placeholder.com/300"
        like={500}
        comment={150}
        share={100}
        save={true}
        send={true}
      />
      <Box
        userName="Tech Geek"
        twitterHandle="@techgeek"
        profilePicture={profile4}
        tweet="AI is revolutionizing industries faster than we can imagine. Stay informed, stay ahead. 🌍"
        tweetImage="https://via.placeholder.com/300"
        like={50}
        comment={21}
        share={40}
        save={true}
        send={true}
      />
    </div>
  );
}

export default App;
