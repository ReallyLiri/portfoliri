import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: black;
`;

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`;


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/agg.jpg')} alt='Really Liri'/>
          <ProfileTitle>REALLY LIRI</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/about'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/'>GALLERY</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;
