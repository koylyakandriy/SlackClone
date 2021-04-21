import React from "react";
import { MessageContainer, MessageInfo } from "./Message.styles";

const Message = ({ message, user, userImage, timestamp }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
