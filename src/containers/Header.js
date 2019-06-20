import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ColorScheme } from "../theme/colorScheme";


const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: ${ColorScheme.dark};
  font-size: 20px;
  font-weight: bold;
  font-family: Arial;
  background-color: ${ColorScheme.lighter};
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
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/'>GALLERY</NavLink>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Header;
