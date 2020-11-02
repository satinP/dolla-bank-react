import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: --80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  color: #FFF;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  justify-content: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
`;

export const NavItem = styled.div`

`;

export const NavLinks = styled.div`

`;

