import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import About from './Home'
import Code from './Code'
import Gallery from './Gallery'
import Album from './Album'

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

export const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
`;


const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`;

class App extends Component {

  componentDidMount() {
    console.error(window.location.pathname);
    if (window.location.pathname === '/') {
      console.error("wat");
    }
  }

  render() {

    return (
      <AppDiv style={{backgroundColor: 'gray'}}>
        <ContainerDiv>
          <Router>
            <Route exact path='/' render={props => (
              <Gallery
                {...props}
              />
            )}/>
            <Route path='/about' component={About}/>
            <Route path='/code' component={Code}/>
            <Route path='/album/:album' render={props => (
              <Album
                {...props}
              />
            )}/>
            <Redirect from="/" to="/" />
          </Router>
        </ContainerDiv>
      </AppDiv>
    );
  }
}

export default App;
