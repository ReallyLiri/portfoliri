import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from './About'
import Code from './Code'
import Albums from './Albums'
import Album from './Album'
import { ColorScheme } from "../theme/colorScheme";

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
  margin: 3% 17% 3% 17%;
  padding: 5px;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  background-color: ${ColorScheme.lighter};
  border-radius: 15px;
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
      <AppDiv style={{backgroundColor: ColorScheme.dark}}>
        <ContainerDiv>
          <Router>
            <Switch>
            <Route exact path='/' render={props => (
              <Albums
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
            <Redirect to='/' />
            </Switch>
          </Router>
        </ContainerDiv>
      </AppDiv>
    );
  }
}

export default App;
