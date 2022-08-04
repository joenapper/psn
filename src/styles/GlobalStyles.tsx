import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #ffffff;
    color: #000000;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Headline = styled.h1`
  color: ${colors.black};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.primary};
  width: fit-content;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 24px;
`;

export default GlobalStyles;
