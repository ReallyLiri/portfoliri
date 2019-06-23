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
  margin: ${props => props.isMobile ? '3% 5% 3% 5%' : '3% 17% 3% 17%'};
  padding: 5px;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  background-color: ${ColorScheme.lighter};
  border-radius: 15px;
`;

function isMobile(width) {
  return width <= 700;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile(window.innerWidth),
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    console.warn(window.innerWidth);
    this.setState({isMobile: isMobile(window.innerWidth)});
  };

  render() {
    console.error(`mobile? ${this.state.isMobile}`);
    return (
      <AppDiv style={{backgroundColor: ColorScheme.dark}}>
        <ContainerDiv isMobile={this.state.isMobile}>
          <Router>
            <RouterComponent isMobile={this.state.isMobile}/>
          </Router>
        </ContainerDiv>
      </AppDiv>
    );
  }
}

export default App;
