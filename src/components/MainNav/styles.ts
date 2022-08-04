import styled from "styled-components";
import { colors } from "../../styles/colors";
import { socialNavHeader } from "../SocialNav/styles";
import { NavMenuProps } from "./types";

const mainNavHeader = "50px";
const topMargin = `calc(${socialNavHeader} + ${mainNavHeader})`;
const navMenuHeight = `calc(100vh - ${topMargin})`;
const scrolledNavMenuHeight = `calc(100vh - ${socialNavHeader})`;

export const NavWrapper = styled.div`
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: ${colors.secondary};
`;

export const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  height: ${mainNavHeader};
  overflow: hidden;
  padding: 0 1rem;

  img {
    height: 16px;
    width: auto;
    justify-self: start;
  }
`;

export const MenuIcon = styled.div`
  justify-self: end;
  display: block;
  cursor: pointer;

  &.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  &.is-active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    -ms-transform: translateY(8px) rotate(45deg);
    -o-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }

  &.is-active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    -ms-transform: translateY(-8px) rotate(-45deg);
    -o-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: ${colors.white};
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: block;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: start;
  /* top: ${topMargin}; */
  top: ${({ scrolled }) => (scrolled ? socialNavHeader : topMargin)};
  left: 0;
  width: 100%;
  height: ${({ scrolled }) =>
    scrolled ? scrolledNavMenuHeight : navMenuHeight};
  /* height: ${navMenuHeight}; */
  transform: translate(101%);
  text-align: center;
  overflow: hidden;
  transition: 0.2s all ease;
  color: ${({ scrolled }) => scrolled && "red !important"};

  &.mobile-nav {
    transform: translate(0);
    background: ${colors.secondary};
  }
`;

export const NavItem = styled.li`
  padding: 15px;

  a {
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease-out;

    &:hover {
      color: #3498db;
    }
  }
`;
