import React from "react";
import Header from "./Header";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <>
      <Header backButton="/" />
      <div className="chats">
        <Chat
          name="Katrina Kaif"
          message="Whats Up!!"
          timeStamp="40 seconds ago"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/6/65/Katrina_Kaif_in_2018.jpg"
        />
        <Chat
          name="Zendaya"
          message="Whats Up!!"
          timeStamp="40 seconds ago"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/1200px-Zendaya_-_2019_by_Glenn_Francis.jpg"
        />
        <Chat
          name="Scarlet Johansson"
          message="Whats Up!!"
          timeStamp="40 seconds ago"
          profilePic="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg"
        />
        <Chat
          name="Selena Gomez"
          message="Whats Up!!"
          timeStamp="40 seconds ago"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/8/85/Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg"
        />
      </div>
    </>
  );
}

export default Chats;
