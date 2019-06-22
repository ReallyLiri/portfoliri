import React, { Component } from 'react';

import { CenteredHeader } from './App.js'
import { ALBUMS } from '../content/gallery-content'
import Gallery from "react-photo-gallery";

class Album extends Component {

  images = null;

  render() {

    const {history} = this.props;
    const {album} = this.props.match.params;

    const {images, rowHeight} = ALBUMS[album];

    return (
      <div>
        <div>
          <CenteredHeader>Album {album} !</CenteredHeader>
          <button onClick={() => history.push('/')}>
            Back to albums list
          </button>
          <Gallery
            targetRowHeight={rowHeight}
            photos={images}
            onClick={(event, obj) => window.open(images[obj.index].src, "_self")}
          />
        </div>
      </div>
    );
  }
}

export default Album;
