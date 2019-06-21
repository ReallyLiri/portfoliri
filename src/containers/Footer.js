import React, { Component } from 'react';
import styled from 'styled-components';

import { ColorScheme } from '../theme/colorScheme.js'

const FooterDiv = styled.div`
  padding: 5px;
  background-color: ${ColorScheme.lighter};
  border-radius: 15px;
  text-align: center;
  height: 100%;
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

const IconWithHover = styled.i`
  &:hover {
    color: ${ColorScheme.dark}
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

const icon = (props) => {
  return (
    <li style={{display: 'inline'}}>
      <a style={{color: ColorScheme.darker}} href={props.href} target="_blank" rel="noopener noreferrer">
        <IconWithHover className={`fa fa-${props.faName} fa-fw fa-2x`}/>
      </a>
    </li>
  )
};

class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        <div className="row social" style={{margin: 0}}>
          <div className="col-lg-12">
            <SocialIconList>
              {icon({href: 'mailto:reallyliri@gmail.com', faName: 'envelope'})}
              {icon({href: 'http://www.linkedin.com/in/liri-sokol', faName: 'linkedin'})}
              {icon({href: 'https://github.com/ReallyLiri', faName: 'github'})}
              {icon({href: 'https://stackoverflow.com/users/1236401/mugen', faName: 'stack-overflow'})}
            </SocialIconList>
            <br/>
          </div>
        </div>
        <div  style={{margin: 0}}>
          <div >
            <p  style={{fontFamily: 'arial', fontSize: 8}}>© Liri Sokol - Since 1992</p>
          </div>
        </div>
      </FooterDiv>
    );
  }
}

export default Footer;
