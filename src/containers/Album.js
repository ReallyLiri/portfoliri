import React, {Component} from 'react';
import styled from 'styled-components';

import {getGalleryAlbums} from '../content/gallery-content'
import Gallery from "react-photo-gallery";
import {ColorScheme} from "../theme/colorScheme";
import {NiceButton} from './Albums'
import {lineSeparator} from './Header'
import {loadingPlaceholder} from "../content/loading";

const AlbumDescription = styled.div`
  text-align: center;
  font-family: Verdana;
  color: ${ColorScheme.darker};
  font-size: ${props => props.isMobile ? 14 : 26};
  font-weight: bold;
  padding-right: 20px;
`;

const Link = styled.a`
  color: ${ColorScheme.dark};
`;

class Album extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      albums: null
    }
  }

  async componentDidMount() {
    const albums = await getGalleryAlbums();
    this.setState({isReady: true, albums: albums});
  }

  render() {

    if (!this.state.isReady) {
      return loadingPlaceholder();
    }

    const {history} = this.props;
    const {album} = this.props.match.params;
    const {images, rowHeight, description, links} = this.state.albums[album];

    return (
      <div>
        <div style={{display: 'inline-flex', alignItems: 'center'}}>
          <NiceButton onClick={() => history.push('/')}>
            <i style={{color: ColorScheme.darker}} className='fa fa-arrow-circle-left fa-fw fa-3x'/>
          </NiceButton>
          <AlbumDescription>{description}</AlbumDescription>
        </div>
        {
          links && links.length ? <AlbumDescription style={{textAlign: "left", paddingLeft: 58, lineHeight: 2}}>
            See also:<br/>
            {
              links.map(link => {return <Link target="_blank" rel="noopener noreferrer" href={link}>{link}<br/></Link>})
            }
          </AlbumDescription> : null
        }
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
