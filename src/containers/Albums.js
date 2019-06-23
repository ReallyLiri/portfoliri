import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import styled from 'styled-components';

import { ALBUMS } from '../content/gallery-content'

export const NiceButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`;


class Albums extends Component {

  albums = null;

  render() {

    const {history} = this.props;

    return (
      <div>
        <StackGrid columnWidth={250} monitorImagesLoaded={true}>
          {
            Object.entries(ALBUMS).map((pair) =>
              <NiceButton
                key={pair[0]}
                style={{margin: 5}}
                onClick={() => history.push(`/album/${pair[0]}`)}
              >
                <img src={pair[1].preview} alt={pair[0]}/>
                <h2>{pair[1].title}</h2>
              </NiceButton>
            )
          }
        </StackGrid>
        <img
          src={require('../assets/footer.png')} alt={'bottom'}
          style={{width: '100%', marginTop: 50, borderRadius: 15}}
        />
      </div>
    );
  }
}

export default Albums;
