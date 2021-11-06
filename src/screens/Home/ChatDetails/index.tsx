import React from "react";

import { IoChatbubbleOutline, IoClose } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import {
  CircularButton,
  Container,
  CreatorTag,
  Flex,
  UserPicture,
} from "./styles";
import { SmallText, Text } from "../../../styles/TextStyles";

import { COLORS } from "../../../constants/Colors";

const members = [
  {
    name: "Charles",
    profileImage:
      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    creator: true,
  },
  {
    name: "Sarah",
    profileImage:
      "https://images.unsplash.com/photo-1631269338881-f4b7b636222a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    creator: false,
  },
  {
    name: "Mark",
    profileImage:
      "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    creator: false,
  },
];

const ChatDetails: React.FC = () => {
  return (
    <Container>
      <Flex>
        <CgMenuGridO />
        <Text className="chat-details-title">Chat Details</Text>
        <CircularButton>
          <IoClose />
        </CircularButton>
      </Flex>

      <SmallText className="chat-details-subtitle" color={COLORS.mediumGray}>
        Members
      </SmallText>

      {members.map((member) => (
        <Flex>
          <UserPicture src={member.profileImage} />
          <SmallText className="member-name">{member.name}</SmallText>
          {member.creator && (
            <CreatorTag color={COLORS.yellow}>Creator</CreatorTag>
          )}
          <IoChatbubbleOutline
            className="chat-bubble-icon"
            color={COLORS.mediumGray}
          />
        </Flex>
      ))}

      <SmallText className="chat-details-subtitle" color={COLORS.mediumGray}>
        Media
      </SmallText>

      <SmallText className="chat-details-subtitle" color={COLORS.mediumGray}>
        Tasks
      </SmallText>
    </Container>
  );
};

export default ChatDetails;
