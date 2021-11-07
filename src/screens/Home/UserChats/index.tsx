import React from "react";
import {
  Circle,
  ColumnDiv,
  Container,
  Input,
  Overflow,
  RowDiv,
  StyledSearchBar,
  UserCard,
} from "./styles";

import { BiChevronDown, BiMicrophone } from "react-icons/bi";
import { FiEdit, FiSearch, FiImage } from "react-icons/fi";
import { TiStarOutline } from "react-icons/ti";

import { COLORS } from "../../../constants/Colors";
import { chatMessages } from "../../../data/homeData";
import { LargeText, SmallText, Text } from "../../../styles/TextStyles";

type UserChatsProps = {
  selectedUser: string;
  setSelectedUser: Function;
};

const UserChats: React.FC<UserChatsProps> = ({
  selectedUser,
  setSelectedUser,
}) => {
  function changeUser(event: React.MouseEvent) {
    // @ts-ignore
    console.log(event);
  }

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

      <Overflow>
        {chatMessages.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];

          return (
            <UserCard
              selected={chat.user.name === selectedUser}
              onClick={() => setSelectedUser(chat.user.name)}
            >
              <img src={chat.user.profileImage} alt={chat.user.name} />
              <ColumnDiv className="user-card-column">
                <Text>{chat.user.name}</Text>
                <RowDiv>
                  {lastMessage.type === "text" ? (
                    <SmallText color={COLORS.lightGray}>
                      {lastMessage.content}
                    </SmallText>
                  ) : lastMessage.type === "audio" ? (
                    <>
                      <BiMicrophone />
                      <SmallText color={COLORS.lightGray}>
                        Voice Message
                      </SmallText>
                    </>
                  ) : (
                    <>
                      <FiImage />
                      <SmallText color={COLORS.lightGray}>Image</SmallText>
                    </>
                  )}
                </RowDiv>
              </ColumnDiv>
            </UserCard>
          );
        })}
      </Overflow>
    </Container>
  );
};

export default UserChats;
