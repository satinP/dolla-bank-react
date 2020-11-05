import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2 ease-in-out;
  }
`;

export const SideButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(RouterLink)`
  color: #010606;
  border-radius: 25px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
