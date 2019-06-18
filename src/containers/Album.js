import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'
import { ALBUMS } from '../assets'
import Gallery from "react-photo-gallery";

class Album extends Component {

  images = null;

  render() {

    const {history} = this.props;
    const {album} = this.props.match.params;

    console.error(this.props);

    const images = ALBUMS[album].images;
    const imagesGallery = images.map((image) => {
      return {
        src: image.src,
        height: image.horizontal ? 3 : 4,
        width: image.horizontal ? 4 : 3
      }
    });

    return (
      <div>
        <Header/>
        <div>
          <CenteredHeader>Album {album} !</CenteredHeader>
          <button onClick={() => history.push('/')}>
            Back to albums list
          </button>
          <Gallery
            photos={imagesGallery}
            onClick={(event, obj) => window.open(imagesGallery[obj.index].src, "_self")}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Album;
