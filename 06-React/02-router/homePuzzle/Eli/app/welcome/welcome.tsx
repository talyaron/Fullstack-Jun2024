import { useState } from "react";
import { Link } from "react-router";
import { user } from "~/model/modelDataBase";
import Post from "~/render/componenets/PostComp";
import Posted from "~/render/componenets/PostedComp";


export function Welcome() {
  const [posts, setPosts] = useState<{ message: string; pfp: string; name: string }[]>([]);

  const handleSubmit = (message: string) => {
    if (message.trim() === "") return;
    setPosts([...posts, { message, pfp: user.pfp, name: user.name }]);
  };
  
  return (
    <>
      <Link to="/chat" className="absolute top-4 right-4 text-blue-700 dark:text-blue-500">chat</Link>
       <Post pfp={user.pfp} name={user.name} onSubmit={handleSubmit} />
      <div id="postsContainer">
        {posts.map((post, index) => (
          <Posted key={index} {...post} />
        ))}
      </div>
    </>
  );
}


