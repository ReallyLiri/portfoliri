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
          style={{textAlign: 'center', backgroundColor: ColorScheme.darker, padding: 5, borderRadius: 15}}
        >
          <p>
            TBD
          </p>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default About;
