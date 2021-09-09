import React from "react";
import { Grid } from "./styles";

import UserOptions from "./UserOptions";
import UserChats from "./UserChats";

const Home: React.FC = () => {
  return (
    <Grid>
      <UserOptions />
      <UserChats />
    </Grid>
  );
};

export default Home;
