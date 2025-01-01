import { useState } from "react";
import styles from "./BoxChat.module.scss";
import ChatUser from "./ChatUser";
import { user, users } from "~/model/modelDataBase";

const BoxChat = () => {
     
    
  return (
    <>
      <h1 className={styles.title}> wlcome to chat !!!!!</h1>
      <div className={styles.container}>
      {users.map((user, index) => (
          <ChatUser key={index} {...user} />
        ))}      
      </div>
    </>
  );
};

export default BoxChat;
