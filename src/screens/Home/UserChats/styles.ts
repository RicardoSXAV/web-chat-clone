import styled from "styled-components";

import { COLORS } from "../../../constants/Colors";

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

export const UserCard = styled.div`
  display: flex;

  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;

    border-radius: 50%;
  }
`;
