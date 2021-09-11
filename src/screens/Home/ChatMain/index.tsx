import React from "react";
import {
  Container,
  IconsContainer,
  MessageInput,
  Overflow,
  TextInput,
  UserProfilePicture,
} from "./styles";

import { BiMicrophone } from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import { IoPaperPlane } from "react-icons/io5";
import { COLORS } from "../../../constants/Colors";
import { users } from "../../../data/homeData";

const ChatMain: React.FC = () => {
  return (
    <Container>
      <Overflow></Overflow>

      <MessageInput>
        <UserProfilePicture src={users[0].profileImage} />
        <TextInput placeholder="Your Message" />
        <IconsContainer>
          <BiMicrophone />
          <FiPaperclip />
          <IoPaperPlane />
        </IconsContainer>
      </MessageInput>
    </Container>
  );
};

export default ChatMain;
