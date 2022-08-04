import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

const pulse = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999;
`;

export const LoaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 64px;

  div {
    &:first-child {
      animation-delay: -0.32s;
    }

    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
`;

export const LoaderIcon = styled.div`
  width: 14px;
  height: 14px;
  background: ${colors.primary};
  border-radius: 100%;
  animation: ${pulse} 1.2s infinite ease-in-out both;
`;
