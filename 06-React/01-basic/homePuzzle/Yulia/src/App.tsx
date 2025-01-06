import Tweet, { Props } from './view/components/tweet/Tweet'
import './App.css'
import user1 from './assets/img/user1.png'
import user2 from './assets/img/user2.png'  
import user3 from './assets/img/user3.png'
import user4 from './assets/img/user4.png'
import mountain from './assets/img/mountain-view.png'
import map from './assets/img/world-map.png'


function App() {
  const Tweets: Props[] = [
    {
      userName: "Alice Johnson",
      profilePicture: user1,
      tweetContent:
        "Just finished my first marathon! 🏃‍♀️ Feeling accomplished and ready for more challenges ahead. 💪",
    },
    {
      userName: "Bob Martinez",
      profilePicture: user2,
      tweetContent:
        "The view from the mountains today was breathtaking. Nature truly is the best therapy. 🌄",
      tweetImage: mountain,
    },
    {
      userName: "Coding Guru",
      profilePicture: user3,
      tweetContent:
        "Did you know? JavaScript is now 28 years old! Still going strong as the most popular programming language. 🎉",
    },
    {
      userName: "Travel Addict",
      profilePicture: user4,
      tweetContent:
        "Bucket list Visit all seven continents! 🗺️ Just added Antarctica to the list. 🐧",
      tweetImage: map,
    },
  ];
  

  return (
    <>
      {Tweets.map((tweet, index) => (
        <Tweet
          key={index}
          userName={tweet.userName}
          profilePicture={tweet.profilePicture}
          tweetContent={tweet.tweetContent}
          tweetImage={tweet.tweetImage}
        />
      ))}
     
    </>
  )
}

export default App
