import React from 'react'
import type { Route } from '../+types/root'

async function loader({params}:Route.LoaderArgs) {
  const chatName= params.chatName;
  return{ chatName} ;
}
const PersonalMessages = ({loaderData}:Route.ComponentProps) => {
  if(loaderData!==undefined)
  return (
    <div>
      <h1> messages from : {loaderData}</h1>
    </div>
  )
}

export default PersonalMessages
