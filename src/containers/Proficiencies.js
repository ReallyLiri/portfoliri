import React, { Component } from "react";

import { ColorScheme } from "../theme/colorScheme";
import styled from "styled-components";
import { PROFICIENCIES } from "../content/proficiencies";
import StackGrid from "react-stack-grid";

const IconWithHover = styled.i`
color: ${ColorScheme.darker};
font-size: 5rem;
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
  margin-bottom: 30px;
`;

const icon = (props) => {
  return (
    <IconWithHover className={`devicon-${props.devicon}-plain`}/>
  )
};

class Proficiencies extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Proficiencies;
