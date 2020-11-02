import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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

export const NavLogo = styled(RouterLink)`
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
    /* margin-top: 20px; */
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.div`
  height: 80px;
`;

export const NavLinks = styled(ScrollLink)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;
export const NavButtonLink = styled(RouterLink)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    transition: all .2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

