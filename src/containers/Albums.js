import React, { Component } from 'react';
import StackGrid from "react-stack-grid";

import Header from './Header.js'
import Footer from './Footer.js'
import { ALBUMS } from '../content/gallery-content'


class Albums extends Component {

  albums = null;

  render() {

    const {history} = this.props;

    return (
      <div>
        <Header/>
        <StackGrid columnWidth={250} monitorImagesLoaded={true}>
          {
            Object.entries(ALBUMS).map((pair) =>
              <button
                key={pair[0]}
                style={{margin: 5, backgroundColor: 'transparent', borderColor: 'transparent', cursor: 'pointer'}}
                onClick={() => history.push(`/album/${pair[0]}`)}
              >
                <img src={pair[1].preview} alt={pair[0]}/>
                <h2>{pair[1].title}</h2>
              </button>
            )
          }
        </StackGrid>
        <img
          src={require('../assets/footer.png')} alt={'bottom'}
          style={{width: '100%', marginTop: 50, borderRadius: 15}}
        />
        <Footer/>
      </div>
    );
  }
}

export default Albums;
