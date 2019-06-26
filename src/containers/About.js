import React, { Component } from 'react';
import styled from 'styled-components';

import { ColorScheme } from "../theme/colorScheme";

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

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
            My name is Liri. I am a {getAge('1992-08-20')} years old artist, designer and developer, based in Tel Aviv,
            Israel.
          </p>
          <p>
            Although my main ambition is riding on the back of a dragon towards the sunset with "Holy Diver" playing on the background, I'm compromising on being a mad (computer) scientist at day and a crazy cat person at night (more like evening, I like to sleep).
          </p>
          <p>
            I conqured the Technion (BSc Software Engineering) and am currently learning Graphic Design at HIT (not to be confused with MIT). My next target is the Unseen University.
          </p>
          <p>
            My art (coding is an art too) is intended to be a bit shocking, if you weren't shocked, please try again.
          </p>
          <p>
            You can interest me with any software or art project, I'm always looking for new stuff to learn and
            practice.
          </p>
        </AboutContainer>

        <img src={require('../assets/limonit.png')} alt={'limonit'} style={{width: '100%', borderRadius: 15}}/>

      </div>
    );
  }
}

export default About;
