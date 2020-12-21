import React, { useState } from "react";
import "./Conversation.css";
import Avatar from "@material-ui/core/Avatar";

function Conversation() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Amritha",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      message: "Hey Pal",
    },
    {
      name: "Amritha",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      message: "How are you?",
    },
    {
      name: "Amritha",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      message: "Had Coffee?",
    },
    {
      message: "Yeah! I had. What about you?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="conversation">
      <div>
        <p className="conversation-timestamp">
          You matched with Amritha on 10/07/2020
        </p>
        {messages.map((message) =>
          message.name ? (
            <div className="conversation-message">
              <Avatar
                className="conversation-image"
                alt={message.name}
                src={message.image}
              />
              <p className="conversation-text">{message.message}</p>
            </div>
          ) : (
            <div className="conversation-message">
              <p className="conversation-textUser">{message.message}</p>
            </div>
          )
        )}
      </div>
      <div>
        <form className="conversation-input">
          <input
            type="text"
            placeholder="Type a message..."
            className="conversation-input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSend}
            className="conversation-input-button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Conversation;
