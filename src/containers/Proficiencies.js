import React, { Component } from "react";

import { ColorScheme } from "../theme/colorScheme";
import styled from "styled-components";
import { PROFICIENCIES } from "../content/proficiencies";
import StackGrid from "react-stack-grid";

const IconWithHover = styled.i`
  color: ${ColorScheme.darker};
  font-size: ${props => props.isMobile ? '3rem' : '5rem'};
  &:hover {
    color: ${ColorScheme.dark};
  }
  margin-bottom: ${props => props.isMobile ? '12px' : '20px'};
`;

const Title = styled.div`
  font-size: ${props => props.isMobile ? '15px' : '18px'};
  font-weight: bold;
  padding-bottom: 20px;
  color: ${ColorScheme.dark};
`;

const Listed = styled.div`
  font-size: ${props => props.isMobile ? '13px' : '16px'};
  font-family: "Courier New";
  font-weight: bolder;
  display: inline-block;
  margin: ${props => props.isMobile ? '12px' : '20px'};
  color: ${ColorScheme.dark};
`;

const ProfContainer = styled.div`
  border-radius: 50%;
  background-color: ${ColorScheme.darker};
  height: ${props => props.isMobile ? '120px' : '150px'};
  width: ${props => props.isMobile ? '120px' : '150px'};
  text-align: center;
  vertical-align: middle;
  padding: 5px;
  margin-bottom: ${props => props.isMobile ? '5px' : '30px'};
`;

const icon = (props) => {
  return (
    <IconWithHover {...props} className={`devicon-${props.devicon}-plain`}/>
  )
};

class Proficiencies extends Component {
  render() {
    const {isMobile} = this.props;
    return (
      <div>
        {
          Object.entries(PROFICIENCIES).map((pair) => {
            return (
              <div key={pair[0]} style={{padding: 20}}>
                <Title isMobile={isMobile}>{pair[0]}</Title>
                <StackGrid columnWidth={isMobile ? 140 : 200}>
                  {
                    pair[1].map((prof) => {
                      return (
                        <ProfContainer isMobile={isMobile} key={prof.name}>
                          <Listed isMobile={isMobile}>{prof.name}</Listed><br/>
                          {prof.devicon && icon({isMobile: isMobile, devicon: prof.devicon})}
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
