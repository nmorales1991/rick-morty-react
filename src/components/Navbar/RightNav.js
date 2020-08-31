import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import {
  NavLink
} from "react-router-dom";



const Nav = styled.nav`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

const Item = styled(NavLink)`
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  //cursor: pointer;
  &:hover {
    color: red;
  }
  font-family: "VT323", monospace;
  line-height: 1.5;
`;

const RightNav = () => {
  return (
    <Nav>
      <Logo />
      <Item activeClassName="selected" exact to={'/'}>Personajes</Item>
      <Item activeClassName="selected" to={'/episodios'}>Episodios</Item>
      <Item activeClassName="selected" to={'/lugares'}>Lugares</Item>
    </Nav>
  );
};

export default RightNav;
