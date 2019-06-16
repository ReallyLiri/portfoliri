import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import { CenteredHeader } from './App.js'

class Album extends Component {

  images = null;

  render() {

    const {s3, history} = this.props;
    const {album} = this.props.match.params;

    let imagesComponent = null;
    const albumPhotosKey = encodeURIComponent(album) + '/';
    const bucketName = s3.config.params.Bucket;
    if (!this.images) {
      imagesComponent = "Loading images...";

      const self = this;
      console.log(s3);
      s3.listObjects({Prefix: albumPhotosKey}, function (err, data) {
        if (err) {
          console.error(`Failed to fetch data from bucket: ${err}`);
          return;
        }

        console.log(data);

        const href = this.request.httpRequest.endpoint.href;
        const bucketUrl = href.replace('//s3.', `//${bucketName}.s3.`);

        self.images = data.Contents
          .filter(photo => photo.Key !== albumPhotosKey)
          .map(photo => {
            const photoKey = photo.Key;
            const photoUrl = bucketUrl + encodeURIComponent(photoKey);
            return {
              imageKey: photoKey,
              imageUrl: photoUrl
            }
          });
        self.forceUpdate();
      });
    } else {

      console.log(this.images);
      imagesComponent = (this.images.map(
        (image) =>
          <span key={image.imageUrl}>
            <div>
              <br/>
              <a href={image.imageUrl}>
                <img style={{width: '20%'}} src={image.imageUrl}/>
              </a>
            </div>
            <div>
              <span>
                {image.imageKey.replace(albumPhotosKey, '')}
              </span>
            </div>
          </span>
      ));

    }

    return (
      <div>
        <Header/>
        <div>
          <CenteredHeader>Album {album} !</CenteredHeader>
          <button onClick={() => history.push('/art')}>
            Back to albums list
          </button>
          <div>
            {imagesComponent}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Album;
