// @ts-nocheck
import React from "react";

import {
  AudioMessage,
  Circle,
  Container,
  IconsContainer,
  ImageViewer,
  MessageBubble,
  MessageInput,
  Overflow,
  TextInput,
  UserProfilePicture,
  VerticalBar,
} from "./styles";

import { BiMicrophone } from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";

import { chatMessages, users } from "../../../data/homeData";

const ChatMain: React.FC = () => {
  return (
    <Container>
      <Overflow>
        {chatMessages
          .find((chat) => chat.user.name === "Misha Landry")
          ?.messages.map((message) => {
            if (message.type === "image") {
              return (
                <ImageViewer>
                  {message.content.map((imageSrc: string) => (
                    <img src={imageSrc} alt="" />
                  ))}
                </ImageViewer>
              );
            } else if (message.type === "audio") {
              return (
                <AudioMessage>
                  <FaPlay />

                  {Array(32)
                    .fill()
                    .map(() => {
                      const randHeight = Math.random() * (1 - 0.3) + 0.3;
                      return <VerticalBar height={randHeight} />;
                    })}

                  <Circle />

                  <p>0:30</p>
                </AudioMessage>
              );
            } else {
              return <MessageBubble>{message.content}</MessageBubble>;
            }
          })}
      </Overflow>

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
