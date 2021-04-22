import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AccessTime from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { auth } from "../../firebase";
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from "./Header.styles";

const Header = () => {
  const [user] = useAuthState(auth);
  const signOut = () => auth.signOut();

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={signOut}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
