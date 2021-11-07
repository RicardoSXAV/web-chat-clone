import React from "react";
import { Container, GroupContainer, UserPicture } from "./styles";

import { COLORS } from "../../../constants/Colors";
import { chatMessages } from "../../../data/homeData";
import { BsGrid } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import {
  IoDocumentTextOutline,
  IoImageOutline,
  IoVideocamOutline,
} from "react-icons/io5";

type ChatOptionsProps = {
  selectedUser: string;
};

const ChatOptions: React.FC<ChatOptionsProps> = ({ selectedUser }) => {
  const userPicture = chatMessages.find(
    (chat) => chat.user.name === selectedUser
  )?.user.profileImage;

  return (
    <Container>
      <GroupContainer className="group-container-1">
        <BsGrid />
        {selectedUser}
      </GroupContainer>

      <GroupContainer className="group-container-2">
        <IoVideocamOutline color={COLORS.lightGray} />
        <FiPhoneCall color={COLORS.lightGray} />
        <IoImageOutline color={COLORS.lightGray} />
        <IoDocumentTextOutline color={COLORS.lightGray} />
      </GroupContainer>

      <GroupContainer>
        <UserPicture src={userPicture} />
      </GroupContainer>
    </Container>
  );
};

export default ChatOptions;
