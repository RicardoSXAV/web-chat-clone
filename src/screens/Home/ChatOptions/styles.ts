import styled from "styled-components";

export const Container = styled.div`
  grid-area: chat-options;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  .group-container-1 {
    gap: 1rem;
  }

  .group-container-2 {
    font-size: 1.5rem;
    gap: 1rem;

    svg:nth-of-type(2) {
      font-size: 1.3rem;
    }

    svg {
      transition: all 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        filter: brightness(1.3);
      }
    }
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;

  border-radius: 50%;
`;
