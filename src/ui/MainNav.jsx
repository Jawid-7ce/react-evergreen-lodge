import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  transition: all 0.3s ease-in-out;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-grey-600);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem; 
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0.05);
    border-left: 3px solid transparent;
    position: relative;
    overflow: hidden;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background: linear-gradient(135deg, var(--color-grey-100), var(--color-grey-200));
    border-left: 3px solid var(--color-brand-600);
    transform: translateX(3px);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 0%;
    height: 100%;
    background: var(--color-brand-100);
    transition: width 0.4s ease-in-out;
    opacity: 0.1;
  }

  &:hover::before,
  &:active::before,
  &.active::before {
    width: 100%;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-400);
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
    transform: rotate(10deg);
  }
`;


function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
