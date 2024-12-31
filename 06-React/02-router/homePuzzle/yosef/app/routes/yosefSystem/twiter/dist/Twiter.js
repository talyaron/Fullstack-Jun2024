"use strict";
// import React from 'react'
// import { Link, Outlet } from 'react-router'
exports.__esModule = true;
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
var Post_1 = require("./post/Post");
// import Storie from './view/componnet/storie/Storie'  
function Twiter() {
    var array = [
        { content: 'Hello there!', like: 0 },
        { content: 'bye', like: 0 },
        { content: 'wow man!', like: 0 },
        { content: 'i love you!', like: 0 },
    ];
    return (React.createElement("div", { className: "App" }, array.map(function (item, index) { return (React.createElement(Post_1["default"], { key: index, content: item.content, like: item.like })); })));
}
exports["default"] = Twiter;
