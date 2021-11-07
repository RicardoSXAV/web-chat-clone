import React from "react";

import {
  Circle,
  ColumnDiv,
  Container,
  CreateWorkspaceButton,
  InputSelect,
  ProfileImage,
  RowContainer,
  RowDiv,
  VerticalLine,
  WorkspaceCard,
  WorkspaceSelect,
} from "./styles";
import { BiChevronDown } from "react-icons/bi";
import { BsBellFill, BsCheck } from "react-icons/bs";
import { ImBubbles } from "react-icons/im";
import { HiPlus } from "react-icons/hi";

import { COLORS } from "../../../constants/Colors";
import { chatMessages, users } from "../../../data/homeData";
import { SmallText, Text } from "../../../styles/TextStyles";

const UserOptions: React.FC = () => {
  return (
    <Container>
      <RowContainer>
        <ProfileImage>
          <VerticalLine />
          <img src={users[0].profileImage} alt="Avatar" />
        </ProfileImage>

        <InputSelect>
          <ImBubbles color={COLORS.blue} />
          <Text>All</Text>
          <BiChevronDown color={COLORS.mediumGray} />
        </InputSelect>
      </RowContainer>

      <WorkspaceSelect>
        {users.map((user, index) => (
          <WorkspaceCard>
            <img src={user.profileImage} alt={user.name} />
            <ColumnDiv>
              <Text>{user.name}</Text>
              <RowDiv>
                <BsBellFill className="bell-icon" color={COLORS.red} />
                <SmallText className="notifications-number">
                  {user.notifications}
                </SmallText>
                <SmallText color={COLORS.lightGray}>new</SmallText>
              </RowDiv>
            </ColumnDiv>
            {index === 0 && (
              <BsCheck color={COLORS.blue} className="workspace-check" />
            )}
          </WorkspaceCard>
        ))}
        <CreateWorkspaceButton>
          <Circle>
            <HiPlus color={COLORS.white} />
          </Circle>
          <Text>Create new workspace</Text>
        </CreateWorkspaceButton>
      </WorkspaceSelect>
    </Container>
  );
};

export default UserOptions;
