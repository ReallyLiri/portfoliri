import React, { Component } from 'react';
import styled from 'styled-components';

import { ALBUMS } from '../content/gallery-content'
import Gallery from "react-photo-gallery";
import { ColorScheme } from "../theme/colorScheme";
import { NiceButton } from './Albums'
import { lineSeparator } from './Header'

const AlbumDescription = styled.div`
  text-align: center;
  font-family: Verdana;
  color: ${ColorScheme.darker};
  font-size: ${props => props.isMobile ? 14 : 26};
  font-weight: bold;
  padding-right: 20px;
`;

class Album extends Component {

  render() {

    const {history} = this.props;
    const {album} = this.props.match.params;
    const {images, rowHeight, description} = ALBUMS[album];

    return (
      <div>
        <div style={{display: 'inline-flex', alignItems: 'center'}}>
          <NiceButton onClick={() => history.push('/')}>
            <i style={{color: ColorScheme.darker}} className='fa fa-arrow-circle-left fa-fw fa-3x'/>
          </NiceButton>
          <AlbumDescription>{description}</AlbumDescription>
        </div>
        {lineSeparator()}
        <Gallery
          targetRowHeight={rowHeight}
          photos={images}
          onClick={(event, obj) => {
            const newTab = window.open(images[obj.index].src, "_blank");
            newTab.focus();
          }}
        />
      </div>
    );
  }

}

export default Album;
