import React from 'react'
import type { Route } from './+types/chat';
import { useParams } from 'react-router';
import { users } from '~/model/modelDataBase';



const PersonalMessages = ({loaderData}:Route.ComponentProps) => {
  if(loaderData===undefined) return;
    const { chatName } = useParams<{ chatName: string }>();
   const userFound =users.find(user=>user.name===chatName)
   if(userFound)
  return (
    <div>
      <h1> messages from : {chatName}</h1>
      <p> {userFound.msgs}</p>
    </div>
  )
}

export default PersonalMessages
