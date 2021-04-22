import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { LoginContainer, LoginInnerContainer } from "./Login.styles";

const Login = ({ image }) => {
  const singIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((e) => console.error(e));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={image} alt="Slack logo" />
        <h1>Sign in to the Slack</h1>
        <p>slack.com</p>
        <Button onClick={singIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
