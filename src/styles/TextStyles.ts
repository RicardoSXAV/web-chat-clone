import styled from "styled-components";

import { COLORS } from "../constants/Colors";

export const SmallText = styled.p`
  color: ${(props) => props.color || COLORS.white};
  font-size: 0.8rem;
`;

export const Text = styled.p`
  color: ${(props) => props.color || COLORS.white};
`;

export const LargeText = styled.h1`
  color: ${(props) => props.color || COLORS.white};
  font-weight: 500;
  font-size: 1.3rem;
`;
