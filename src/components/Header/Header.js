import React from "react";
import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">
            <NavLinkContent>Sale</NavLinkContent>
            <NavLinkHoverContent>Sale</NavLinkHoverContent>
          </NavLink>
          <NavLink href="/new">
            <NavLinkContent>New&nbsp;Releases</NavLinkContent>
            <NavLinkHoverContent>New&nbsp;Releases</NavLinkHoverContent>
          </NavLink>
          <NavLink href="/men">
            <NavLinkContent>Men</NavLinkContent>
            <NavLinkHoverContent>Men</NavLinkHoverContent>
          </NavLink>
          <NavLink href="/women">
            <NavLinkContent>Women</NavLinkContent>
            <NavLinkHoverContent>Women</NavLinkHoverContent>
          </NavLink>
          <NavLink href="/kids">
            <NavLinkContent>Kids</NavLinkContent>
            <NavLinkHoverContent>Kids</NavLinkHoverContent>
          </NavLink>
          <NavLink href="/collections">
            <NavLinkContent>Collections</NavLinkContent>
            <NavLinkHoverContent>Collections</NavLinkHoverContent>
          </NavLink>
        </Nav>
        <RightSide>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </RightSide>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  /* height: 72px; */
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 3.6vw - 1rem, 3rem);
  margin: 0px 48px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const RightSide = styled(Side)`
  & * {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex: 0 1 auto;
    display: flex;
    gap: 32px;

    & * {
      display: revert;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    gap: 16px;
  }
`;

const NavLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavLinkContent = styled.span`
  display: inline-block;

  @media ${QUERIES.showMotion} {
    ${NavLink}:hover & {
      transition: transform 200ms;
      transform: translateY(-100%);
    }
  }
`;

const NavLinkHoverContent = styled.span`
  position: absolute;
  font-weight: 700;
  transform: translateY(100%);
  left: 0;
  top: 0;

  @media ${QUERIES.showMotion} {
    ${NavLink}:hover & {
      transition: transform 200ms;
      transform: translateY(0%);
    }
  }
`;

export default Header;
