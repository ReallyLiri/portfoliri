import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'
import { ALBUMS } from '../assets'

class Album extends Component {

  images = null;

  render() {

    const {history} = this.props;
    const {album} = this.props.match.params;

    console.error(this.props);

    const images = ALBUMS[album].images;

    return (
      <div>
        <Header/>
        <div>
          <CenteredHeader>Album {album} !</CenteredHeader>
          <button onClick={() => history.push('/')}>
            Back to albums list
          </button>
          <ul>
            {
              images.map((image) =>
                <li key={image}>
                  <div>
                    <br/>
                    <a href={image}>
                      <img style={{width: '20%', color: 'black'}} src={image} alt="wat"/>
                    </a>
                  </div>
                </li>)
            }
          </ul>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Album;
