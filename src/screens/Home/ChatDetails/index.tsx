import React from "react";

import {
  IoChatbubbleOutline,
  IoClose,
  IoCheckbox,
  IoStopOutline,
  IoSquareOutline,
} from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { BsSquare } from "react-icons/bs";
import {
  CircularButton,
  Container,
  CreatorTag,
  Flex,
  MediaFlex,
  PreviewImage,
  TaskLine,
  TotalImages,
  UserPicture,
} from "./styles";
import { SmallText, Text } from "../../../styles/TextStyles";

import { COLORS } from "../../../constants/Colors";
import { tasks } from "../../../data/homeData";
import { HiOutlineStar } from "react-icons/hi";

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

      <MediaFlex>
        <PreviewImage src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <PreviewImage src="https://images.unsplash.com/photo-1551717743-49959800b1f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <PreviewImage src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <TotalImages>+ 1354</TotalImages>
      </MediaFlex>

      <SmallText className="chat-details-subtitle" color={COLORS.mediumGray}>
        Tasks
      </SmallText>
      {tasks.map((task) => (
        <TaskLine>
          {task.checked ? (
            <IoCheckbox color={COLORS.blue} className="check-box" />
          ) : (
            <IoSquareOutline color={COLORS.lightGray} />
          )}
          {task.starred ? (
            <HiOutlineStar color={COLORS.yellow} />
          ) : (
            <HiOutlineStar color={COLORS.lightGray} />
          )}
          <SmallText>{task.name}</SmallText>
        </TaskLine>
      ))}
    </Container>
  );
};

export default ChatDetails;
