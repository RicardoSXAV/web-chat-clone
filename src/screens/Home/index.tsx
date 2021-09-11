import React from "react";
import { Grid } from "./styles";

import UserOptions from "./UserOptions";
import UserChats from "./UserChats";
import ChatOptions from "./ChatOptions";
import ChatMain from "./ChatMain";

const Home: React.FC = () => {
  return (
    <Grid>
      <UserOptions />
      <UserChats />
      <ChatOptions />
      <ChatMain />
    </Grid>
  );
};

export default Home;
