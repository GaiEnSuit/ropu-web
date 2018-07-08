import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// CSS
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import HomePage from './home/HomePage';
import CharacterSelectionPage from './characterselection/CharacterSelectionPage';
import StoryList from './StoryList';
import CharacterView from './CharacterView';
import HomeBrewList from './HomeBrewList';
import NotFound404 from './NotFound404';

// Custom Components
import RopuAppBar from './appbar/RopuAppBar';

// Dialogs
import MenuDialog from './dialogs/MenuDialog';
import HomeDialog from './dialogs/HomeDialog';
import GuideDialog from './dialogs/guidedialog/GuideDialog';
import LogInDialog from './dialogs/LogInDialog';
import MarketDialog from './dialogs/MarketDialog';
import CreateCharacterDialog from './dialogs/createcharacterdialog/CreateCharacterDialog';
import CancelCreateCharacterDialog from './dialogs/createcharacterdialog/CancelCreateCharacterDialog';
import InteractableCardDialog from './dialogs/InteractableCardDialog';

// Menus
import AccountMenu from './menus/AccountMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Material-UI CSS */}
        <CssBaseline />
        {/* Header and App Bar */}
        <RopuAppBar
          update={this.props.setAppState}
          loggedIn={this.props.appState.loggedIn}
        />
        {/* Body */}
        <Switch>
          {/* Home Page Route */}
          <Route 
            exact 
            path='/' 
            render={() =>
              <HomePage
                paths={this.props.appState.paths}
                homePageText={this.props.appState.homePageText}
                newsFeedText={this.props.appState.newsFeedText}
                footerText={this.props.appState.footerText}
              />
            }
          />
          {/* Character Selection Route */}
          <Route 
            exact
            path='/characters' 
            render={() =>
              <CharacterSelectionPage
                characterSelectionPageText={this.props.appState.characterSelectionPageText}
                characterListData={this.props.appState.characterListData}
                update={this.props.setAppState}
              />
            }
          />
          {/* Player View */}
          <Route path='/characters/:id?' render={({match}) => 
            this.props.appState.characterListData.find(x => x.id === parseInt(match.params.id, 10)) === undefined?
              (
                <Redirect to='/404' />
              ) : (
                <CharacterView character={this.props.appState.characterListData.find(x => x.id === parseInt(match.params.id, 10))} />
              )
          } />
          {/* Story List */}
          <Route exact path='/stories' render={() => <StoryList gameListData={this.props.appState.gameListData} />} />
          {/* Home Brew List */}
          <Route exact path='/homebrew' component={HomeBrewList} />
          {/* Page Not Found */}
          <Route component={NotFound404} />
        </Switch>
        {/* Dialogs */}
        <MenuDialog 
          menuDialogText={this.props.appState.menuDialogText}
          menuDialog={this.props.appState.menuDialog}
          loggedIn={this.props.appState.loggedIn}
          domain={this.props.appState.domain}
          update={this.props.setAppState}
        />
        <HomeDialog 
          homeDialog={this.props.appState.homeDialog}
          homeDialogText={this.props.appState.homeDialogText}
          update={this.props.setAppState}
        />
        <GuideDialog
          guideDialog={this.props.appState.guideDialog}
          guideDialogData={this.props.appState.guideDialogData}
          guideDialogText={this.props.appState.guideDialogText}
          update={this.props.setAppState}
        />
        <LogInDialog 
          logInDialog={this.props.appState.logInDialog}
          logInDialogText={this.props.appState.logInDialogText}
          update={this.props.setAppState}
        />
        <MarketDialog
          marketDialog={this.props.appState.marketDialog}
          marketDialogText={this.props.appState.marketDialogText}
          update={this.props.setAppState}
        />
        {/* Menus */}
        <AccountMenu 
          anchor={this.props.appState.anchorEl}
          accountMenuText={this.props.appState.accountMenuText}
          update={this.props.setAppState}
        />
        <CreateCharacterDialog
          update={this.props.setAppState}
          createCharacterDialog={this.props.appState.createCharacterDialog}
          createCharacterDialogTab={this.props.appState.createCharacterDialogTab}
          createCharacterDialogText={this.props.appState.createCharacterDialogText}
          createCharacterData={this.props.appState.createCharacterData}
          characterListData={this.props.appState.characterListData}
          gameListData={this.props.appState.gameListData}
          selectedGame={this.props.appState.selectedGame}
          selectedTemplate={this.props.appState.selectedTemplate}
        />
        <CancelCreateCharacterDialog
          createCharacterDialogTab={this.props.appState.createCharacterDialogTab}
          cancelCreateCharacterDialog={this.props.appState.cancelCreateCharacterDialog}
          cancelCreateCharacterDialogText={this.props.appState.cancelCreateCharacterDialogText}
          update={this.props.setAppState}
        />
        <InteractableCardDialog
          interactableCardDialog={this.props.appState.interactableCardDialog}
          selectedInteractable={this.props.appState.selectedInteractable}
          update={this.props.setAppState}
        />
      </div>
    );
  }
}

export default App;
