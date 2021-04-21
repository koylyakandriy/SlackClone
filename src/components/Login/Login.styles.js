import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const LoginInnerContainer = styled.div`
  text-align: center;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 15px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: #ffffff;
  }
`;
