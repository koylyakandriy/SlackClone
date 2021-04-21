import React, { useState } from "react";
import firebase from "firebase";
import { ChatInputContainer } from "./ChatInput.styles";
import { Button } from "@material-ui/core";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!channelId) return;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: value,
      user: user.displayName,
      userImage: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setValue("");
  };

  const placeholder = channelName ? `#${channelName}` : "";

  return (
    <ChatInputContainer>
      <form action="">
        <input
          value={value}
          onChange={({ target }) => onChange(target)}
          type="text"
          placeholder={`Message ${placeholder}`}
        />
        <Button hidden type="submit" onClick={handleSubmit}>
          Send Message
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
