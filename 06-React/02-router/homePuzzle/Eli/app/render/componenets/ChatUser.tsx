import React from 'react'
import  styles  from "./ChatUser.module.scss";
import { Link } from 'react-router';
import PersonalMessages from '~/routes/PersonalMessages';
interface ChatUserProps {
  name: string;
  pfp: string;
}

const ChatUser = ({ name, pfp }: ChatUserProps) => {

  return (
    <Link to={"/chat/"+name}>
    <div className={styles.user} >
      <img src={pfp} alt="profile photo" />
      <h1>{name}</h1>
    </div>
    </Link>
  );
};

export default ChatUser
