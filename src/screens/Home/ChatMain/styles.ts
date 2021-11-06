import { ReactNode } from "react";

import styled from "styled-components";
import { COLORS } from "../../../constants/Colors";

type MessageBubbleProps = {
  children: ReactNode;
};

type VerticalBarProps = {
  height: number;
};

export const Container = styled.div`
  grid-area: chat-main;

  display: flex;
  flex-direction: column;
`;

export const Overflow = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  font-size: 0.8rem;
  gap: 0.5rem;
  height: 100%;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.lightGray};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.mediumGray};
    border-radius: 4px;
  }
`;

export const MessageBubble = styled.div<MessageBubbleProps>`
  width: fit-content;
  padding: 1rem;

  background-color: ${COLORS.darkGray};
  border-radius: 10rem;
`;

export const ImageViewer = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: auto;
    height: 15rem;

    border-radius: 1rem;
  }
`;

export const AudioMessage = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  padding: 1rem;

  background-color: ${COLORS.darkGray};
  border-radius: 10rem;

  svg {
    margin-right: 1rem;
  }
`;

export const Circle = styled.div`
  display: flex;
  background-color: ${COLORS.red};
  border-radius: 50%;

  width: 0.3rem;
  height: 0.3rem;
  margin: 0 0.3rem;
`;

export const VerticalBar = styled.div<VerticalBarProps>`
  height: ${(props) => props.height}rem;
  width: 0.2rem;
  margin: 0 0.1rem;

  background-color: ${COLORS.yellow};
  border-radius: 50rem;
`;

export const MessageInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 2rem;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem 3rem;

  background-color: ${COLORS.darkGray};
  color: ${COLORS.white};
  border-radius: 10px;
`;

export const UserProfilePicture = styled.img`
  position: absolute;
  margin-left: 0.5rem;

  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;

  border-radius: 50%;
`;

export const IconsContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 0.5rem;

  left: 94%;
  transform: translateX(-86%);

  &:hover {
    cursor: pointer;
  }

  svg:nth-of-type(-n + 2) {
    color: ${COLORS.lightGray};
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: brightness(1.4);
    }
  }

  svg:last-of-type {
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${COLORS.blue};
    }
  }
`;
