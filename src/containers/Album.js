import React, { Component } from 'react';

import { ALBUMS } from '../content/gallery-content'
import Gallery from "react-photo-gallery";
import { ColorScheme } from "../theme/colorScheme";
import { NiceButton } from './Albums'

class Album extends Component {

  render() {

    const {history} = this.props;
    const {album} = this.props.match.params;
    const {images, rowHeight, description} = ALBUMS[album];

    return (
      <div>
        <div style={{display: 'inline-flex'}}>
          <NiceButton onClick={() => history.push('/')}>
            <i style={{color: ColorScheme.dark}} className='fa fa-arrow-circle-left fa-fw fa-3x'/>
          </NiceButton>
          <h4 style={{textAlign: 'center', fontFamily: 'verdana', color: ColorScheme.dark}}>{description}</h4>
        </div>
        <Gallery
          targetRowHeight={rowHeight}
          photos={images}
          onClick={(event, obj) => window.open(images[obj.index].src, "_self")}
        />
      </div>
    );
  }

}

export default Album;
