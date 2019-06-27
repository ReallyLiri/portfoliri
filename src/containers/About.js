import React, { Component } from 'react';
import styled from 'styled-components';

import { ColorScheme } from "../theme/colorScheme";

const TitleText = styled.div`
  white-space: nowrap;
  text-align: center;
  i, h4 {
    display: inline-block;
    white-space:normal;
  vertical-align:middle;
  
  }
`;

const TitleIcon = (faClass) => {
  return (
    <i style={{color: ColorScheme.darker, padding: 20}} className={`fa ${faClass}`}/>
  );
};

const AboutContainer = styled.div`
  text-align: left;
  background-color: ${ColorScheme.dark};
  color: ${ColorScheme.darker};
  margin: 20px 0 20px 0;
  padding: 15px;
  border-radius: 15px;
  font-family: Arial;
`;

class About extends Component {
  render() {
    return (
      <div>
        <TitleText>
          {TitleIcon('fa-pencil')}
          <h4 style={{color: ColorScheme.darker}}>Liri Sokol</h4>
          {TitleIcon('fa-paint-brush fa-flip-horizontal')}
        </TitleText>

        <img src={require('../assets/liri.png')} alt={'liri'} style={{width: '100%', borderRadius: 15}}/>

        <AboutContainer>
          <p>
            Artist | Designer | Developer
          </p>
          <p>
            Although my main ambition is riding on the back of a dragon towards the sunset, "Holy Diver" playing on the
            background, I'm compromising on being a mad (computer) scientist at day and applying the shapes of my mind
            to the materialized world at night.
          </p>
          <p>
            I believe we live in the best of all possible worlds, that we are all a part of a hive with one a collective
            mind and that our perception has the power to shape the very core of existence. Oh, and cats rule the world.
            Of course.
          </p>
        </AboutContainer>

      </div>
    );
  }
}

export default About;
