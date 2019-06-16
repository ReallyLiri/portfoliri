import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CenteredHeader>Hi! I'm Liri.</CenteredHeader>
        <p>
          Wow.
        </p>
        <p>
          Cool.
        </p>
        <p>
          Superb.
        </p>
        <Footer/>
      </div>
    );
  }
}
export default Home;
