import React, { useContext } from "react";
import More from "../img/more.png";
import Add from "../img/add.png";
import Messages from "./Messages";
import Input from "./Input.jsx";
import { ChatContext } from "../context/Chatcontext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={More} alt="" />
          <img src={Add} alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
