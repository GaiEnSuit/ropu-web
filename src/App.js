import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// CSS
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import Home from './Home';
import CharacterList from './CharacterList';
import Stories from './Stories';
import MarketPage from './MarketPage';
import CreateCharacter from './CreateCharacter';
import CharacterView from './CharacterView';
import NotFound404 from './NotFound404';

// Custom Components
import RopuAppBar from './appbar/RopuAppBar';

// Dialogs
import MenuDialog from './dialogs/MenuDialog';
import HomeDialog from './dialogs/HomeDialog';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Css Baseline */}
        <CssBaseline />
        {/* Header */}
        <header>
          <RopuAppBar
            update={this.props.setAppState}
            menuLinks={this.props.appState.menuLinks}
            menuDrawer={this.props.appState.menuDrawer}
            ropuAppBar={this.props.appState.ropuAppBar}
            toggleDialog={this.toggleDialog}
          />
        </header>
        {/* Body */}
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
            <Route exact path='/market' component={MarketPage} />
            <Route path='/404' component={NotFound404} />
          </Switch>
        </main>
        {/* All Dialogs */}
        <MenuDialog menuLinks={this.props.appState.menuLinks} menuDialog={this.props.appState.menuDialog} update={this.props.setAppState} />
        <HomeDialog homeDialog={this.props.appState.homeDialog} homeDialogInfo={this.props.appState.homeDialogInfo} update={this.props.setAppState} />
      </div>
    );
  }
}

export default App;
