import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledButton = styled.button`
  border-radius: 0.25rem;
  outline: none;
  border: none;
  padding: 0.25rem 0.5rem;
  font-family: inherit;
  background: #ffffff;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
    color: ${colors.primary};
  }
`;
