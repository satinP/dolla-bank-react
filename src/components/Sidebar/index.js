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

function SideBar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>

        <SideButton>
          <SidebarRoute to="/sigin">Sign In</SidebarRoute>
        </SideButton>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
