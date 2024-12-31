import React from 'react'
import type { Route } from './+types/chat';
import { useParams } from 'react-router';



const PersonalMessages = ({loaderData}:Route.ComponentProps) => {
  if(loaderData===undefined) return;
    const { chatName } = useParams<{ chatName: string }>();
  return (
    <div>
      <h1> messages from : {chatName}</h1>
    </div>
  )
}

export default PersonalMessages
