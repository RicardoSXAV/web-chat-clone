import styled from "styled-components";
import { COLORS } from "../../../constants/Colors";

export const Container = styled.div`
  grid-area: chat-details;

  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin: 0 0 0 2rem;
  gap: 1rem;

  background-color: ${COLORS.darkestGray};

  .chat-details-title {
    margin: 0 auto 0 2rem;
  }

  .chat-details-subtitle {
    font-weight: 600;
  }

  .member-name {
    margin: 0 1rem;
  }

  .chat-bubble-icon {
    margin-left: auto;

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
  }
`;

export const CircularButton = styled.button`
  display: flex;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 50%;

  background-color: ${COLORS.darkGray};
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 0.8rem;
    color: ${COLORS.lightGray};
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.9);
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const CreatorTag = styled.p`
  font-size: 0.6rem;
  color: ${COLORS.yellow};
`;
