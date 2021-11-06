import React from "react";
import { Grid } from "./styles";

import UserOptions from "./UserOptions";
import UserChats from "./UserChats";
import ChatOptions from "./ChatOptions";
import ChatMain from "./ChatMain";
import ChatDetails from "./ChatDetails";

const Home: React.FC = () => {
  return (
    <Grid>
      <UserOptions />
      <UserChats />
      <ChatOptions />
      <ChatMain />
      <ChatDetails />
    </Grid>
  );
};

export default Home;
