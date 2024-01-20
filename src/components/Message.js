import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
    
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : "left"}`}>
      <div style={{ display: "flex", alignItems: "center"}}>
         <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <p className="user-name">{message.name}</p>
      </div>
     
      <div className="chat-bubble__right">
        
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
