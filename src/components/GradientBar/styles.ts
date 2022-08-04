import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

const gradient = `linear-gradient(-45deg, #ee7752, ${colors.tertiary}, ${colors.primary}, ${colors.black})`;

const shimmer = keyframes`
  0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`;

export const GradBar = styled.div`
  width: 100%;
  height: 5px;
  background: ${gradient};
  background-size: 400% 400%;
  animation: ${shimmer} 10s ease infinite;
  margin: 1rem 0;
`;
