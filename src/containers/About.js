import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'
import { ColorScheme } from "../theme/colorScheme";

class About extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CenteredHeader>Liri Sokol</CenteredHeader>
        <img src={require('../assets/liri.png')} alt={'liri'} style={{width: '100%', borderRadius: 15}}/>
        <div
          style={{
            textAlign: 'left',
            backgroundColor: ColorScheme.darker,
            marginTop: 20,
            padding: 15,
            borderRadius: 15,
            fontFamily: 'arial'
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default About;
