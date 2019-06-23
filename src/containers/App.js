import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router } from "react-router-dom";
import { ColorScheme } from "../theme/colorScheme";
import RouterComponent from "./RouterComponent";

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
            <RouterComponent {...this.props}/>
          </Router>
        </ContainerDiv>
      </AppDiv>
    );
  }
}

export default App;
