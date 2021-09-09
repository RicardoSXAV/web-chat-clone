import styled from "styled-components";
import { COLORS } from "../../../constants/Colors";

export const Container = styled.div`
  grid-area: user-options;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 2rem;
  height: fit-content;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .bell-icon {
    margin-right: 0.5rem;
  }

  .notifications-number {
    margin-right: 0.2rem;
  }
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VerticalLine = styled.span`
  position: absolute;
  background-color: ${COLORS.blue};

  width: 0.2rem;
  height: 1rem;
  border-radius: 15px;

  left: 0;
  top: 35%;
`;

export const ProfileImage = styled.div`
  position: relative;
  display: flex;
  background-color: ${COLORS.darkGray};

  padding: 0.5rem;
  border-radius: 20px;

  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;

    border-radius: 16px;
  }
`;

export const InputSelect = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;

  gap: 0.5rem;
`;

export const Circle = styled.div`
  display: flex;
  background-color: ${COLORS.purple};
  border-radius: 50%;
`;

export const WorkspaceSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  background-color: ${COLORS.gray};
  border-radius: 16px;
`;

export const WorkspaceCard = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;

  border-bottom: 0.5px solid ${COLORS.mediumGray};

  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;

    border-radius: 16px;
  }

  .workspace-check {
    font-size: 1.5rem;
    margin-left: 1rem;
    align-self: center;
  }
`;

export const CreateWorkspaceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;

  background-color: ${COLORS.gray};
  border-radius: 16px;
`;
