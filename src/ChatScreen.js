import React, { useState } from "react";
import Header from "./Header";
import "./chatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen(props) {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Katrina_Kaif_in_2018.jpg",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Katrina_Kaif_in_2018.jpg",
      message: "Howz it going!!",
    },
    {
      message: "Whats up",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  }

  return (
    <div className="chatScreen">
      <Header backButton="/chat" />
      <p className="chatScreen__timeStamp">
        You matched with Ellen on 4/2/2022
      </p>
      {messages.map((message) => {
        return message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        );
      })}
      <div>
        <form className="chatScreen__input">
          <input value={input}
            onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a Message..."
          />
          <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
