import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Code from './Code'
import Art from './Art'

export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
};

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
  render() {
    return (
      <AppDiv>
        <ContainerDiv>
          <Router>
            <Route exact path='/' component={Home}/>
            <Route path='/code' component={Code}/>
            <Route path='/art' component={Art}/>
          </Router>
        </ContainerDiv>
      </AppDiv>
    );
  }
}

export default App;
