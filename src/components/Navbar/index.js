import React from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, 
         NavItem, NavLinks, NavButton, NavButtonLink } from './styles';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            dolla
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
            <NavItem>
              <NavLinks to="discover">
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavButton>
            <NavButtonLink to="/signin">
              Sign in
            </NavButtonLink>
          </NavButton>
          
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default Navbar
