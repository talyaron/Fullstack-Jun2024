import React from 'react'
import  styles  from "./ChatUser.module.scss";
interface ChatUserProps {
  name: string;
  pfp: string;
}

const ChatUser = ({ name, pfp }: ChatUserProps) => {
  return (
    <div className={styles.user}>
   
      <img src={pfp} alt="profile photo" />
      <h1>{name}</h1>
    </div>
  );
};

export default ChatUser
