import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorScheme } from "../theme/colorScheme";

function isActivatedLink(link) {
  return window.location.pathname === link;
}

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  padding: 10px;
  color: ${props => isActivatedLink(props.to) ? ColorScheme.dark : ColorScheme.darker};
  background-color: ${props => isActivatedLink(props.to) ? ColorScheme.darker : ColorScheme.dark};
  font-size: ${props => props.isMobile ? '12px' : '20px'};
  font-weight: bold;
  border-radius: 15px;
  text-decoration: none;
`;

const navSeparator = () => {
  return (
    <i style={{color: ColorScheme.dark}} className='fa fa-dot-circle-o'/>
  );
};

export const lineSeparator = () => {
  return (
    <hr style={{
      borderTop: 0,
      margin: 10,
      borderRadius: 15,
      height: 5,
      borderColor: ColorScheme.dark,
      borderLeftColor: 'transparent',
      backgroundColor: ColorScheme.dark
    }}/>
  )
};


class Header extends Component {
  render() {
    const {isMobile} = this.props;
    return (
      <div style={{textAlign: 'center'}}>
        <Link className="no-select" to="/" style={{cursor: 'pointer'}}>
          <img
            src={require('../assets/toptext.png')} alt='Really Liri'
            style={{width: (isMobile ? '90%' : '65%'), marginBottom: 20}}
          />
        </Link>
        <div>
          <NavLink className="no-select" to='/about' isMobile={isMobile}>ABOUT</NavLink>
          {navSeparator()}
          <NavLink className="no-select" to='/prof' isMobile={isMobile}>PROFICIENCIES</NavLink>
          {navSeparator()}
          <NavLink className="no-select" to='/' isMobile={isMobile}>GALLERY</NavLink>
        </div>
        {lineSeparator()}
      </div>
    );
  }
}

export default Header;
