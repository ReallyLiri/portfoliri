import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from './About'
import Proficiencies from './Proficiencies'
import Albums from './Albums'
import Album from './Album'
import { ColorScheme } from "../theme/colorScheme";
import Header from "./Header";
import Footer from "./Footer";

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
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

  render() {

    return (
      <AppDiv style={{backgroundColor: ColorScheme.dark}}>
        <ContainerDiv>
          <Router>

            <Header/>

            <Switch>
              <Route exact path='/' render={props => (
                <Albums
                  {...props}
                />
              )}/>
              <Route path='/about' component={About}/>
              <Route path='/prof' component={Proficiencies}/>
              <Route path='/album/:album' render={props => (
                <Album
                  {...props}
                />
              )}/>
              <Redirect to='/'/>
            </Switch>

            <Footer/>

          </Router>
        </ContainerDiv>
      </AppDiv>
    );
  }
}

export default App;
