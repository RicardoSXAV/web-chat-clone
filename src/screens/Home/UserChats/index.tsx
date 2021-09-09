import React from "react";
import {
  Circle,
  Container,
  Input,
  RowDiv,
  StyledSearchBar,
  UserCard,
} from "./styles";

import { BiChevronDown } from "react-icons/bi";
import { FiEdit, FiSearch } from "react-icons/fi";
import { TiStarOutline } from "react-icons/ti";

import { COLORS } from "../../../constants/Colors";
import { chatMessages } from "../../../data/homeData";
import { LargeText, Text } from "../../../styles/TextStyles";

const UserChats: React.FC = () => {
  return (
    <Container>
      <RowDiv className="user-chats-title">
        <LargeText>Messages</LargeText>
        <Circle />

        <BiChevronDown className="chevron-icon" />
        <FiEdit color={COLORS.lightGray} className="edit-icon" />
        <TiStarOutline color={COLORS.lightGray} className="star-icon" />
      </RowDiv>

      <StyledSearchBar>
        <FiSearch color={COLORS.lightGray} />
        <Input placeholder="Search" />
      </StyledSearchBar>

      {chatMessages.map((chat) => (
        <UserCard>
          <img src={chat.user.profileImage} alt={chat.user.name} />
          <Text>{chat.user.name}</Text>
        </UserCard>
      ))}
    </Container>
  );
};

export default UserChats;
