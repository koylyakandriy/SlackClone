import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background: var(--slack-color);
  color: #ffffff;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  flex: 0.3;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  color: gray;
  text-align: center;
  padding: 0 50px;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #ffffff;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
	
	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;
