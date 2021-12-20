import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const navItems = [
  {
    id: 1,
    link: "/sale",
    text: "Sale",
  },
  {
    id: 2,
    link: "/new",
    text: "New Releases",
  },
  {
    id: 3,
    link: "/men",
    text: "Men",
  },
  {
    id: 4,
    link: "/women",
    text: "Women",
  },
  {
    id: 5,
    link: "/kids",
    text: "Kids",
  },
  {
    id: 6,
    link: "/collections",
    text: "Collections",
  },
];

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          {navItems.map(({ id, link, text }, index) => (
            <NavLink index={index} key={id} href={link}>
              {text}
            </NavLink>
          ))}
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 400ms both;
  perspective: 500px;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%) rotateY(-180deg);
    opacity: 0;
  }

  to {
    transform: translateX(0%) rotateY(0deg);
    opacity: 1;
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media ${QUERIES.showMotion} {
    animation: ${slideIn} 400ms both;
    animation-delay: 150ms;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  text-transform: uppercase;
  animation: ${fadeIn} ${(props) => `${300 + props.index * 250}ms`} both;
  animation-delay: 400ms;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
