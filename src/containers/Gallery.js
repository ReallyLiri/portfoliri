import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'
import { ALBUMS } from '../content/gallery-content'


class Gallery extends Component {

  albums = null;

  render() {

    const {history} = this.props;

    return (
      <div>
        <Header/>
        <div>
          <CenteredHeader>I write about tech, life, and personal development.</CenteredHeader>
          <ul>
            {
              Object.entries(ALBUMS).map((pair) =>
                  <li key={pair[0]}>
                    <button style={{margin: 5}} onClick={() => history.push(`/album/${pair[0]}`)}>
                      {pair[1].title}
                    </button>
                  </li>
              )
            }
          </ul>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Gallery;
