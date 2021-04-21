import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: #ffffff;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  //margin-top: 60px;

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;
export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 2px;
    color: #49274b;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;
export const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`;
