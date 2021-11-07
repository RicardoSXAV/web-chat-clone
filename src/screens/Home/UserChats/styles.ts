import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../constants/Colors";

interface UserCardProps {
  selected: boolean;
  onClick: Function;
}

export const Container = styled.div`
  grid-area: user-chats;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 2rem;

  .user-chats-title {
    gap: 0.5rem;
    align-self: flex-start;
  }

  svg {
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: brightness(1.5);
    }
  }
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .chevron-icon {
    font-size: 1.3rem;
  }

  .edit-icon {
    font-size: 1.3rem;
    margin-left: 4rem;
  }

  .star-icon {
    font-size: 1.6rem;
    margin-left: 0.5rem;
  }
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Circle = styled.div`
  display: flex;
  background-color: ${COLORS.red};
  border-radius: 50%;

  width: 0.3rem;
  height: 0.3rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2rem;

  color: ${COLORS.white};
  background-color: ${COLORS.gray};
  border-radius: 10px;
`;

export const StyledSearchBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 1rem;

  svg {
    position: absolute;
    margin-left: 0.5rem;
  }
`;

export const Overflow = styled.div`
  overflow-y: auto;
  height: 100%;
  margin-top: 1rem;

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

export const UserCard = styled.div<UserCardProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  background-color: ${(props) => props.selected && COLORS.gray};
  border-radius: ${(props) => props.selected && "16px"};

  margin-right: 0.5rem;
  padding: 1rem 1rem;
  gap: 1rem;

  p {
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => !props.selected && COLORS.darkGray};
    border-radius: 16px;
  }

  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;

    border-radius: 50%;
  }

  svg {
    margin-right: 0.4rem;
  }
`;
