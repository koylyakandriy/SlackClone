import React, { useEffect, useRef } from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import {
  ChatContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatMessages,
  ChatBottom,
} from "./Chat.styles";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "../ChatInput/ChatInput";
import { db } from "../../firebase";
import Message from "../Message/Message";

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [roomId, loading]);

  const channelName = roomDetails?.data().name;

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{channelName}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, user, userImage, timestamp } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  user={user}
                  userImage={userImage}
                  timestamp={timestamp}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={channelName}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
