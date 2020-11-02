import React from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './styles';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            dollas
          </NavLogo>

          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="about">
                About
              </NavLinks>
            </NavItem>
          </NavMenu>

        </NavBarContainer>
      </Nav>
    </>
  )
}

export default Navbar
