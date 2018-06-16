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
    
    const state = this.props.appState;
    
    return (
      <div className="App">
        <CssBaseline />
        <RopuAppBar 
          update={this.props.setAppState}
          navLinks={state.navLinks}
          ropuAppBar={state.ropuAppBar}
          title={state.title}
          className="AppBar"
          alt="logo"
        />
        <main>
          <Switch>
            <Route exact path='/' render={() => <Home newsFeed={state.newsFeed} callToAction={state.callToAction} />} />
            <Route exact path='/characters' render={() => <CharacterList characterList={state.characterList} update={this.props.setAppState}/>} />
            <Route exact path='/characters/create' render={() => <CreateCharacter />} />
            
            <Route path='/characters/:id?' render={({match}) => 
              state.characterList.find(x => x.id === parseInt(match.params.id, 10)) === undefined?
                (
                  <Redirect to='/404' />
                ) : ( 
                  <CharacterView character={state.characterList.find(x => x.id === parseInt(match.params.id, 10))} />
                )
            } />

            <Route exact path='/stories' render={() => <Stories storyList={state.storyList} />} />
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
