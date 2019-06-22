import React, { Component } from 'react';

import { ALBUMS } from '../content/gallery-content'
import Gallery from "react-photo-gallery";
import { ColorScheme } from "../theme/colorScheme";

class Album extends Component {

  images = null;

  render() {

    const {history} = this.props;
    const {album} = this.props.match.params;

    const {images, rowHeight, description} = ALBUMS[album];

    return (
      <div>
        <div>
          <button style={{backgroundColor: 'transparent', border: 0}} onClick={() => history.push('/')}>
            <i style={{color: ColorScheme.dark}} className='fa fa-arrow-circle-left fa-fw fa-3x'/>
          </button>
          <h4 style={{textAlign: 'center'}}>{description}</h4>
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
