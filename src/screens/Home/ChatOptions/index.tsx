import React from "react";
import { Container, GroupContainer, UserPicture } from "./styles";

import { COLORS } from "../../../constants/Colors";
import { selectedUser } from "../../../data/homeData";
import { BsGrid } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import {
  IoDocumentTextOutline,
  IoImageOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const ChatOptions: React.FC = () => {
  return (
    <Container>
      <GroupContainer className="group-container-1">
        <BsGrid />
        {selectedUser.name}
      </GroupContainer>

      <GroupContainer className="group-container-2">
        <IoVideocamOutline color={COLORS.lightGray} />
        <FiPhoneCall color={COLORS.lightGray} />
        <IoImageOutline color={COLORS.lightGray} />
        <IoDocumentTextOutline color={COLORS.lightGray} />
      </GroupContainer>

      <GroupContainer>
        <UserPicture src={selectedUser.profileImage} />
      </GroupContainer>
    </Container>
  );
};

export default ChatOptions;
