import styled from "styled-components";
import { COLORS } from "../../../constants/Colors";

export const Container = styled.div`
  grid-area: chat-main;

  display: flex;
  flex-direction: column;
`;

export const Overflow = styled.div``;

export const MessageInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
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

  margin: 83%;

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
