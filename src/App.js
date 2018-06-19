import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import RopuAppBar from './RopuAppBar';
import Home from './Home';
import CharacterList from './CharacterList';
import Stories from './Stories';
import Rules from './Rules';
import Market from './Market';
import Forums from './Forums';
import CreateCharacter from './CreateCharacter';
import CharacterView from './CharacterView';
import NotFound404 from './NotFound404';
import Footer from './Footer';

import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <RopuAppBar 
          update={this.props.setAppState}
          navLinks={this.props.appState.navLinks}
          ropuAppBar={this.props.appState.ropuAppBar}
          title={this.props.appState.title}
          className="AppBar"
          alt="logo"
        />
        <main>
          <Switch>
            <Route exact path='/' render={() => <Home newsFeed={this.props.appState.newsFeed} callToAction={this.props.appState.callToAction} />} />
            <Route exact path='/characters' render={() => <CharacterList characterList={this.props.appState.characterList} update={this.props.setAppState} />} />
            <Route exact path='/characters/create' render={() => <CreateCharacter />} />
            
            <Route path='/characters/:id?' render={({match}) => 
              this.props.appState.characterList.find(x => x.id === parseInt(match.params.id, 10)) === undefined?
                (
                  <Redirect to='/404' />
                ) : ( 
                  <CharacterView character={this.props.appState.characterList.find(x => x.id === parseInt(match.params.id, 10))} />
                )
            } />

            <Route exact path='/stories' render={() => <Stories storyList={this.props.appState.storyList} />} />
            <Route exact path='/rules' component={Rules} />
            <Route exact path='/market' component={Market} />
            <Route exact path='/forums' component={Forums} />
            <Route path='/404' component={NotFound404} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
