import React, { Component } from "react";

import Header from './Header.js'
import Footer from './Footer.js'
import { ColorScheme } from "../theme/colorScheme";
import styled from "styled-components";
import { PROFICIENCIES } from "../content/proficiencies";
import StackGrid from "react-stack-grid";

const IconWithHover = styled.i`
  &:hover {
    color: ${ColorScheme.dark};
  }
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 20px;
  color: ${ColorScheme.dark};
`;

const Listed = styled.div`
  font-size: 16px;
  font-family: "Courier New";
  font-weight: bolder;
  display: inline-block;
  margin: 20px;
  color: ${ColorScheme.dark};
`;

const ProfContainer = styled.div`
  border-radius: 50%;
  background-color: ${ColorScheme.darker};
  height: 150px;
  width: 150px;
  text-align: center;
  vertical-align: middle;
  padding: 5px;
`;

const icon = (props) => {
  return (
    <a style={{color: ColorScheme.darker}}>
      <IconWithHover
        className={`devicon-${props.devicon}-plain`} style={{fontSize: '5rem'}}
      />
    </a>
  )
};

class Code extends Component {
  render() {
    return (
      <div>
        <Header/>

        {
          Object.entries(PROFICIENCIES).map((pair) => {
            return (
              <div key={pair[0]} style={{padding: 20}}>
                <Title>{pair[0]}</Title>
                <StackGrid columnWidth={200}>
                  {
                    pair[1].map((prof) => {
                      return (
                        <ProfContainer key={prof.name}>
                          <Listed>{prof.name}</Listed><br/>
                          {prof.devicon && icon({devicon: prof.devicon})}
                        </ProfContainer>
                      )
                    })
                  }
                </StackGrid>
              </div>
            )
          })
        }

        <Footer/>
      </div>
    );
  }
}

export default Code;
