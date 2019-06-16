import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'


class Art extends Component {

  albums = null;

  render() {

    const {s3, history} = this.props;

    let albumsComponent = null;
    if (!this.albums) {
      albumsComponent = "Loading albums...";

      const self = this;
      s3.listObjects({Delimiter: '/'}, function (err, data) {
        if (err) {
          console.error(`Failed to fetch data from bucket: ${err}`);
          return;
        }

        self.albums = data.CommonPrefixes.map(function (commonPrefix) {
          const prefix = commonPrefix.Prefix;
          const albumName = decodeURIComponent(prefix.replace('/', ''));
          return {
            albumName: albumName
          }
        });
        self.forceUpdate();
      });
    } else {

      albumsComponent = (this.albums.map(
        (album) =>
          <li key={album.albumName}>
            <button style={{margin: 5}} onClick={() => history.push(`/album/${album.albumName}`)}>
              {album.albumName}
            </button>
          </li>
      ));

    }

    return (
      <div>
        <Header/>
        <div>
          <CenteredHeader>I write about tech, life, and personal development.</CenteredHeader>
          <ul>
            {albumsComponent}
          </ul>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Art;
