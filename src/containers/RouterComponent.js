import PropTypes from "prop-types";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import Header from "./Header";
import Albums from "./Albums";
import About from "./About";
import Proficiencies from "./Proficiencies";
import Album from "./Album";
import Footer from "./Footer";


class RouterComponent extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    const {isMobile} = this.props;

    return (
      <div>
        <Header {...this.props}/>

        <Switch>
          <Route exact path='/' render={props => (
            <Albums {...props} isMobile={isMobile}/>
          )}/>
          <Route path='/about' render={props => (
            <About {...props}/>
          )}/>
          <Route path='/prof' render={props => (
            <Proficiencies {...props} isMobile={isMobile}/>
          )}/>
          <Route path='/album/:album' render={props => (
            <Album {...props} isMobile={isMobile}/>
          )}/>
          <Redirect to='/'/>
        </Switch>

        <Footer {...this.props}/>
      </div>
    );
  }
}

export default withRouter(RouterComponent);
