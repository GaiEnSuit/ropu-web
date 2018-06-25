import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// CSS
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import HomePage from './home/HomePage';
import CharacterList from './CharacterList';
import StoryList from './StoryList';
import CreateCharacter from './CreateCharacter';
import CharacterView from './CharacterView';
import HomeBrewList from './HomeBrewList';
import NotFound404 from './NotFound404';

// Custom Components
import RopuAppBar from './appbar/RopuAppBar';

// Dialogs
import MenuDialog from './dialogs/MenuDialog';
import HomeDialog from './dialogs/HomeDialog';
import GuideDialog from './dialogs/GuideDialog';
import LogInDialog from './dialogs/LogInDialog';
import MarketDialog from './dialogs/MarketDialog';

// Menus
import AccountMenu from './menus/AccountMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Css Baseline */}
        <CssBaseline />
        {/* Header and App Bar */}
        <header>
          <RopuAppBar
            update={this.props.setAppState}
            menuLinks={this.props.appState.menuLinks}
            menuDrawer={this.props.appState.menuDrawer}
            ropuAppBar={this.props.appState.ropuAppBar}
            toggleDialog={this.toggleDialog}
            domain={this.props.appState.domain}
            loggedIn={this.props.appState.loggedIn}
          />
        </header>
        {/* Body */}
        <main>
          <Switch>
            {/* Home Page Route */}
            <Route 
              exact 
              path='/' 
              render={() =>
                <HomePage 
                  newsFeed={this.props.appState.newsFeed}
                  homePageIconsData={this.props.appState.homePageIconsData}
                  version={this.props.appState.version}
                  footer={this.props.appState.footer}
                />
              }
            />
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
            <Route exact path='/stories' render={() => <StoryList storyList={this.props.appState.storyList} />} />
            <Route exact path='/homebrew' component={HomeBrewList} />
            <Route path='/404' component={NotFound404} />
          </Switch>
        </main>
        {/* Dialogs */}
        <MenuDialog 
          menuDialogData={this.props.appState.menuDialogData}
          menuDialog={this.props.appState.menuDialog}
          menuDialogTitle={this.props.appState.menuDialogTitle}
          loggedIn={this.props.appState.loggedIn}
          domain={this.props.appState.domain}
          update={this.props.setAppState}
        />
        <HomeDialog 
          homeDialog={this.props.appState.homeDialog}
          homeDialogData={this.props.appState.homeDialogData}
          update={this.props.setAppState}
        />
        <GuideDialog
          guideDialog={this.props.appState.guideDialog}
          guideDialogData={this.props.appState.guideDialogData}
          guideDialogTitle={this.props.appState.guideDialogTitle}
          update={this.props.setAppState}
        />
        <LogInDialog 
          logInDialog={this.props.appState.logInDialog}
          logInDialogData={this.props.appState.logInDialogData}
          update={this.props.setAppState}
        />
        <MarketDialog
          marketDialog={this.props.appState.marketDialog}
          marketDialogTitle={this.props.appState.marketDialogTitle}
          update={this.props.setAppState}
        />
        {/* Menus */}
        <AccountMenu 
          anchor={this.props.appState.anchorEl}
          accountMenuData={this.props.appState.accountMenuData}
          update={this.props.setAppState}
        />
      </div>
    );
  }
}

export default App;
