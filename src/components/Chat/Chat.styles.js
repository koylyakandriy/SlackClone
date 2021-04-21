import styled from "styled-components";

export const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid lightgray;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;

    > .MuiSvgIcon-root {
      font-size: 18px;
      margin-right: 5px;
    }
  }
`;

export const ChatMessages = styled.div``;

export const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
