import React from "react";
import {
  SidebarOptionChanel,
  SidebarOptionsContainer,
} from "./SidebarOption.styles";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const dispatch = useDispatch();
  const addChanel = () => {
    const channelName = prompt("Please enter a channel name")?.trim();

    if (channelName) {
      db.collection("rooms").add({
        name: channelName.trim(),
      });
    }
  };

  const selectChanel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChanel : selectChanel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: "10px" }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChanel>
          <span>#</span>
          {title}
        </SidebarOptionChanel>
      )}
    </SidebarOptionsContainer>
  );
};

export default SidebarOption;
