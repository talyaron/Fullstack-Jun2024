import { useState } from "react";
import "./App.css";
import Post from "./render/componenets/PostComp";
import Posted from "./render/componenets/PostedComp";

 interface User {
  name: string;
  pfp: string;
}
export const user: User = {
  name: "aaaaa",
  pfp: "https://th.bing.com/th/id/R.fc9ff391e0b92927fc4a526a939b2ca3?rik=M35YB1MrloATrw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd4%2fCat_March_2010-1a.jpg&ehk=lmx5Dow%2btE7KUtrgWeamODrZNBeLisLC4x4%2bkXQRDq8%3d&risl=1&pid=ImgRaw&r=0",
};
function App() {
  const [posts, setPosts] = useState<{ message: string; pfp: string; name: string }[]>([]);

  const handleSubmit = (message: string) => {
    if (message.trim() === "") return;
    setPosts([...posts, { message, pfp: user.pfp, name: user.name }]);
  };
  
  return (
    <>
       <Post pfp={user.pfp} name={user.name} onSubmit={handleSubmit} />
      <div id="postsContainer">
        {posts.map((post, index) => (
          <Posted key={index} {...post} />
        ))}
      </div>
    </>
  );
}

export default App;
