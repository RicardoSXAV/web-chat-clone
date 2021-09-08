import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 350px auto 300px;
  grid-template-rows: 60px minmax(200px, 300px) 300px;

  grid-template-areas:
    "user-options chat-options chat-details"
    "user-options chat-main chat-details"
    "user-chats chat-main chat-details";

  height: 100vh;
`;
