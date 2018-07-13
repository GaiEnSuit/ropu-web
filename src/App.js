import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// CSS
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import HomePage from './home/HomePage';
import CharacterSelectionPage from './characterselection/CharacterSelectionPage';
import StoryList from './StoryList';
import PlayerView from './PlayerView';
import HomeBrewList from './HomeBrewList';
import NotFound404 from './NotFound404';

// Material-ui
import Toolbar from '@material-ui/core/Toolbar';

// Custom Components
import RopuAppBar from './appbar/RopuAppBar';
import Footer from './footer/Footer';

// Dialogs
import MenuDialog from './dialogs/MenuDialog';
import HomeDialog from './dialogs/HomeDialog';
import GuideDialog from './dialogs/guidedialog/GuideDialog';
import LogInDialog from './dialogs/LogInDialog';
import MarketDialog from './dialogs/MarketDialog';
import CreateCharacterDialog from './dialogs/createcharacterdialog/CreateCharacterDialog';
import CancelCreateCharacterDialog from './dialogs/CancelCreateCharacterDialog';
import InteractableCardDialog from './dialogs/InteractableCardDialog';
import DeleteDialog from './dialogs/DeleteDialog';

// Menus
import AccountMenu from './menus/AccountMenu';

class App extends Component {
  render() {
    return (
      <div className="App display-flex direction-column bg-color-light-red min-height">
        {/* Material-Ui CSS Baseline */}
        <CssBaseline />
        {/* Header */}
        <RopuAppBar
          update={this.props.setAppState}
          loggedIn={this.props.appState.loggedIn}
        />
        <Toolbar />
        {/* Main Section */}
        <main className="flex">
          <Switch>
            {/* Home Page*/}
            <Route 
              exact 
              path='/'
              render={() =>
                <HomePage
                  paths={this.props.appState.paths}
                  homePageText={this.props.appState.homePageText}
                />
              }
            />
            {/* Character Selection Page */}
            <Route 
              exact
              path='/characters' 
              render={() =>
                <CharacterSelectionPage
                  characterSelectionPageText={this.props.appState.characterSelectionPageText}
                  characterListData={this.props.appState.characterListData}
                  createCharacterData={this.props.appState.createCharacterData}
                  gameListData={this.props.appState.gameListData}
                  update={this.props.setAppState}
                />
              }
            />
            {/* Player View Page */}
            <Route path='/playerview/:id?' render={({match}) => 
              this.props.appState.characterListData.find(x => x.id === parseInt(match.params.id, 10)) === undefined?
                (
                  <Redirect to='/404' />
                ) : (
                  <PlayerView character={this.props.appState.characterListData.find(x => x.id === parseInt(match.params.id, 10))} />
                )
            } />
            {/* Story Page */}
            <Route exact path='/stories' render={() => <StoryList gameListData={this.props.appState.gameListData} />} />
            {/* Home Brew Page */}
            <Route exact path='/homebrew' render={() => <HomeBrewList homebrewListData={this.props.appState.homebrewListData} />} />
            {/* Page Not Found */}
            <Route component={NotFound404} />
          </Switch>
        </main>
        {/* Footer */}
        {window.location.pathname === "/" &&
          <Footer
            footerText={this.props.appState.footerText}
            licenseData={this.props.appState.licenseData}
          />
        }
        {/* Dialogs */}
        <MenuDialog 
          menuDialogText={this.props.appState.menuDialogText}
          menuDialog={this.props.appState.menuDialog}
          loggedIn={this.props.appState.loggedIn}
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
          cancelCreateCharacterDialog={this.props.appState.cancelCreateCharacterDialog}
          cancelCreateCharacterDialogText={this.props.appState.cancelCreateCharacterDialogText}
          update={this.props.setAppState}
        />
        <InteractableCardDialog
          interactableCardDialog={this.props.appState.interactableCardDialog}
          selectedInteractable={this.props.appState.selectedInteractable}
          update={this.props.setAppState}
        />
        <DeleteDialog
          selectedCharacter={this.props.appState.selectedCharacter}
          deleteDialog={this.props.appState.deleteDialog}
          deleteDialogText={this.props.appState.deleteDialogText}
          update={this.props.setAppState}
          characterListData={this.props.appState.characterListData}
        />
      </div>
    );
  }
}

export default App;
