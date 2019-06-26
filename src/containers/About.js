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

        <div
          style={{
            textAlign: 'left',
            backgroundColor: ColorScheme.dark,
            color: ColorScheme.darker,
            marginTop: 20,
            marginBottom: 20,
            padding: 15,
            borderRadius: 15,
            fontFamily: 'arial'
          }}
        >
          <p>
            My name is Liri. I am a {getAge('1992-08-20')} years old artist, designer and developer, based in Tel Aviv,
            Israel.
          </p>
          <p>
            I graduated with a BSc in Software Engineering from the Technion and got about {getAge('2012-08-01')} years
            of professional coding experience.
            I'm mainly proficient with backend development, but am also very interested in modern frontend solutions and
            cloud architecture.
          </p>
          <p>
            My art is a bit grotesque at times, but is meant to challenge our perception and thought.
            I'm working towards becoming a professional graphic designer, which I hope to express using my coding
            skills, which are also an art form.
          </p>
          <p>
            You can interest me with any software or art project, I'm always looking for new stuff to learn and
            practice.
          </p>
        </div>

        <img src={require('../assets/limonit.png')} alt={'limonit'} style={{width: '100%', borderRadius: 15}}/>

      </div>
    );
  }
}

export default About;
