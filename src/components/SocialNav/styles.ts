import styled from "styled-components";
import { colors } from "../../styles/colors";

export const socialNavHeader = "40px";

export const Wrapper = styled.div`
  background: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: ${socialNavHeader};
`;

export const Logo = styled.span`
  color: #ffffff;
`;

export const ButtonWrapper = styled.div`
  button {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
