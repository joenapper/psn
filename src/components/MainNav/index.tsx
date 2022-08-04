import { useEffect, useState } from "react";
import toHyphenCase from "../../utils/toHypenCase";
import data from "./data";
import { NavWrapper, Navbar, MenuIcon, NavMenu, NavItem } from "./styles";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const addBackground = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", addBackground);
    return () => window.removeEventListener("scroll", addBackground);
  }, []);

  return (
    <NavWrapper data-testid="main-nav">
      <Navbar>
        <img
          src="https://www.globalcyclingnetwork.com/imgs/GCNLogo.svg"
          alt="Company Logo"
        />
        <MenuIcon
          className={`${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </MenuIcon>
        <NavMenu
          className={`${isOpen ? "mobile-nav" : ""}`}
          scrolled={scrolled}
        >
          {data.map((item, index) => (
            <NavItem key={index}>
              <a href={`/${toHyphenCase(item)}`}>{item}</a>
            </NavItem>
          ))}
        </NavMenu>
      </Navbar>
    </NavWrapper>
  );
};

export default MainNav;
