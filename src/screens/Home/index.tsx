import React from "react";
import { Grid } from "./styles";

import UserOptions from "./UserOptions";
import UserChats from "./UserChats";
import ChatOptions from "./ChatOptions";
import ChatMain from "./ChatMain";
import ChatDetails from "./ChatDetails";

type HomeProps = {
  selectedUser: string;
  setSelectedUser: Function;
};

const Home: React.FC<HomeProps> = ({ selectedUser, setSelectedUser }) => {
  return (
    <Grid>
      <UserOptions />
      <UserChats
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <ChatOptions selectedUser={selectedUser} />
      <ChatMain selectedUser={selectedUser} />
      <ChatDetails />
    </Grid>
  );
};

export default Home;
