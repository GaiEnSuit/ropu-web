import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import RopuAppBar from './RopuAppBar';
import Home from './Home';
import Characters from './Characters';
import Stories from './Stories';
import Interactables from './Interactables';
import Rules from './Rules';
import Market from './Market';
import Forums from './Forums';

class App extends Component {
  render() {
    
    const state = this.props.appState;
    
    return (
      <div className="App">
        <RopuAppBar 
          update={this.props.setAppState}
          navLinks={state.navLinks}
          data={state.ropuappbar}
          title={state.title}
          className="AppBar"
          alt="logo"
        />
        <main>
          <Switch>
            <Route exact path='/' render={() => <Home newsFeed={state.newsFeed} cta={state.homecta} />} />
            <Route path='/home' render={() => <Home newsFeed={state.newsFeed} cta={state.homecta} />} />
            <Route path='/characters' component={Characters}/>
            <Route path='/stories' component={Stories} />
            <Route path='/interactables' component={Interactables} />
            <Route path='/rules' component={Rules} />
            <Route path='/market' component={Market} />
            <Route path='/forums' component={Forums} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
