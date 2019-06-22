import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ColorScheme } from "../theme/colorScheme";


const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  padding: 10px;
  color: ${ColorScheme.dark};
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
  background-color: ${ColorScheme.darker};
  border-radius: 15px;
  text-decoration: none;
`;


class Header extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Link to="/">
          <img
            src={require('../assets/toptext.png')} alt='Really Liri'
            style={{width: 600, marginBottom: 20}}
          />
        </Link>
        <div>
          <NavLink to='/about'>ABOUT</NavLink>
          <NavLink to='/prof'>PROFICIENCIES</NavLink>
          <NavLink to='/'>GALLERY</NavLink>
        </div>
        <hr style={{
          borderTop: 0,
          margin: 10,
          borderRadius: 15,
          height: 5,
          borderColor: ColorScheme.darker,
          borderLeftColor: 'transparent',
          backgroundColor: ColorScheme.darker
        }}/>
      </div>
    );
  }
}

export default Header;
