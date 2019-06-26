import React, { Component } from "react";
import jQuery from 'jquery';
import $ from 'jquery';

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


const SvgWithHover = styled.img`
  height: 80px;
  width: 80px;
  background-color: transparent;
  path, rect, polygon, circle {
    fill: ${ColorScheme.darker};
  }
  &:hover {
    path, rect, polygon, circle {
    fill: ${ColorScheme.dark};
    }
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

const devicon = (props) => {
  return (
    <IconWithHover {...props} className={`devicon-${props.devicon}-plain`}/>
  )
};

const svgicon = (props) => {
  return (
    <SvgWithHover className="svg" src={require(`../assets/${props.svg}-plain.svg`)} alt={props.svg}/>
  )
};

function jqueryFix() {
  // https://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement/35126817#35126817
  $(document).ready(function () {
    $('img[src$=".svg"]').each(function () {
      const $img = jQuery(this);
      const imgURL = $img.attr('src');
      const attributes = $img.prop("attributes");

      $.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        let $svg = jQuery(data).find('svg');

        // Remove any invalid XML tags
        $svg = $svg.removeAttr('xmlns:a');

        // Loop through IMG attributes and apply on SVG
        $.each(attributes, function () {
          $svg.attr(this.name, this.value);
        });

        // Replace IMG with SVG
        $img.replaceWith($svg);
      }, 'xml');
    });
  });
}

class Proficiencies extends Component {

  componentDidMount() {
    jqueryFix();
  }

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
                          {prof.devicon && devicon({isMobile: isMobile, devicon: prof.devicon})}
                          {prof.svg && svgicon({isMobile: isMobile, svg: prof.svg})}
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
