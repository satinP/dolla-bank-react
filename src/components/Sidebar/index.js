import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideButton,
  SidebarRoute,
} from './styles';

function Sidebar({ isOpen, toggleIsOpen }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleIsOpen}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleIsOpen}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleIsOpen}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleIsOpen}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>

        <SideButton>
          <SidebarRoute to="/sigin" onClick={toggleIsOpen}>
            Sign In
          </SidebarRoute>
        </SideButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
