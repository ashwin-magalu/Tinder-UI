/* Individual chat screen */
import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat-image" alt={name} src={profilePic} />
        <div className="chat-detail">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <div className="chat-timestamp">
          <p>{timestamp}</p>
        </div>
      </div>
    </Link>
  );
}

export default Chat;
