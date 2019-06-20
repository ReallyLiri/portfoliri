import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'
import { ALBUMS } from '../content/gallery-content'
import Gallery from "react-photo-gallery";

class Album extends Component {

  images = null;

  render() {

    const {history} = this.props;
    const {album} = this.props.match.params;

    console.error(this.props);

    const {images} = ALBUMS[album];

    return (
      <div>
        <Header/>
        <div>
          <CenteredHeader>Album {album} !</CenteredHeader>
          <button onClick={() => history.push('/')}>
            Back to albums list
          </button>
          <Gallery
            photos={images}
            onClick={(event, obj) => window.open(images[obj.index].src, "_self")}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Album;
