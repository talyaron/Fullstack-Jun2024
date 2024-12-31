


// import React from 'react'
// import { Link, Outlet } from 'react-router'

// function Twiter() {
//   return (
//     <div>
//         <div style={{backgroundColor: "pink"}}>
//       <h1>Welcome to Yosef Twiter X</h1>
//       <Link to='/'>Home</Link> | <Link to='/yosefSystem'>Facebook</Link> | <Link to='/yosefSystem'>Yosef</Link>
//       </div>
//       <br /><br />
//       <Outlet></Outlet>
//     </div>
//   )
// }

// export default Twiter

import Post from './post/Post';

// import Storie from './view/componnet/storie/Storie'  

function Twiter() {

  type feed = {
    content: string;
    like: number;
  };
  
  const array: feed[] = [
    { content: 'Hello there!' , like: 0 },
    { content: 'bye', like: 0 },
    { content: 'wow man!', like: 0 },
    { content: 'i love you!', like: 0 },
  ];
  

  return (
    <div className="App">
      {array.map((item, index) => (     
        <Post key={index} content={item.content} like={item.like}/>
      ))}
    </div>
  )
}

export default Twiter