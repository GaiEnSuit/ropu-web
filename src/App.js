import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import RopuAppBar from './RopuAppBar';
import Home from './Home';
import Characters from './Characters';
import Stories from './Stories';
import Rules from './Rules';
import Market from './Market';
import Forums from './Forums';
import CreateCharacter from './CreateCharacter';
import CharacterView from './CharacterView';
import NotFound404 from './NotFound404'

import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  
  render() {
    
    const state = this.props.appState;
    
    return (
      <div className="App">
        <CssBaseline />
        <RopuAppBar 
          update={this.props.setAppState}
          navLinks={state.navLinks}
          ropuappbar={state.ropuappbar}
          title={state.title}
          className="AppBar"
          alt="logo"
        />
        <main>
          <Switch>
            <Route exact path='/' render={() => <Home newsFeed={state.newsFeed} cta={state.homecta} />} />
            <Route exact path='/characters' render={() => <Characters characterList={state.characterList} />} />
            <Route path='/characters/:id?' render={({match}) => <CharacterView character={state.characterList.find(x => x.id === parseInt(match.params.id, 10))} /> } />
            <Route exact path='/characters/create' render={() => <CreateCharacter characterList={state.characterList} />} />
            <Route exact path='/stories' render={() => <Stories storyList={state.storyList} />} />
            <Route exact path='/rules' component={Rules} />
            <Route exact path='/market' component={Market} />
            <Route exact path='/forums' component={Forums} />
            <Route component={NotFound404} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
