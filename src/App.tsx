import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Home from "./screens/Home";
import { chatMessages } from "./data/homeData";

function App() {
  const [selectedUser, setSelectedUser] = useState(chatMessages[0].user.name);

  return (
    <>
      <Home selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

      <GlobalStyles />
    </>
  );
}

export default App;
