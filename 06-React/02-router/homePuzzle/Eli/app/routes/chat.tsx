import React from 'react'
import  BoxChat  from "../render/componenets/BoxChat";
import { Link } from 'react-router';

const chat = () => {
  return (
    <div>
      <Link to="/" className="absolute right-4 top-4 text-blue-700 dark:text-blue-500">Home</Link>

     
      <BoxChat></BoxChat>
    </div>
  )
}

export default chat
