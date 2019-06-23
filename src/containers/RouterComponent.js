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

    return (
      <div>
        <Header {...this.props}/>

        <Switch>
          <Route exact path='/' render={props => (
            <Albums
              {...props}
            />
          )}/>
          <Route path='/about' component={About}/>
          <Route path='/prof' component={Proficiencies}/>
          <Route path='/album/:album' render={props => (
            <Album
              {...props}
            />
          )}/>
          <Redirect to='/'/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(RouterComponent);
