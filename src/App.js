import React, { Component } from 'react';

// Routing
import { Switch, Route, Redirect } from 'react-router-dom';

// CSS Baseline Styles
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import HomePage from './HomePage';
import CharacterSelectionPage from './CharacterSelectionPage';
import CharacterCreationPage from './CharacterCreationPage';
import StorySelectionPage from './StorySelectionPage';
import PlayerViewPage from './PlayerViewPage';
import HomebrewPage from './HomebrewPage';
import ErrorPage from './ErrorPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Material-Ui CSS Baseline */}
        <CssBaseline />
        {/* Main Section */}
        <Switch>
          {/* Home Page*/}
          <Route 
            exact 
            path='/'
            render={() =>
              <HomePage
                paths={this.props.appState.paths}
                text={this.props.appState.homePageText}
                update={this.props.setAppState}
                guideDialogData={this.props.appState.guideDialogData}
              />
            }
          />
          {/* Character Selection Page */}
          <Route 
            exact
            path='/characterselection' 
            render={() =>
              <CharacterSelectionPage
                text={this.props.appState.characterSelectionPageText}
                characterListData={this.props.appState.characterListData}
                createCharacterData={this.props.appState.createCharacterData}
                selectedCharacter={this.props.appState.selectedCharacter}
                gameListData={this.props.appState.gameListData}
                update={this.props.setAppState}
              />
            }
          />
          {/* Character Creation Page */}
          <Route 
            exact
            path='/charactercreation' 
            render={() =>
              <CharacterCreationPage
                text={this.props.appState.characterCreationPageText}
                update={this.props.setAppState}
              />
            }
          />
          {/* Player View Page */}
          <Route
            path='/playerview/:id?'
            render={({match}) => 
              this.props.appState.characterListData.find(x => x.id === parseInt(match.params.id, 10)) === undefined?
                (
                  <Redirect to='/404' />
                ) : (
                  <PlayerViewPage
                    character={this.props.appState.characterListData.find(x => x.id === parseInt(match.params.id, 10))}
                  />
                )
            }
          />
          {/* Story Page */}
          <Route
            exact
            path='/storyselection' 
            render={() =>
              <StorySelectionPage
                text={this.props.appState.storySelectionPageText}
                gameListData={this.props.appState.gameListData}
              />
            }
          />
          {/* Home Brew Page */}
          <Route
            exact
            path='/homebrew'
            render={() =>
              <HomebrewPage
                text={this.props.appState.homebrewPageText}
              />
            }
          />
          {/* Page Not Found */}
          <Route 
            render={() =>
              <ErrorPage
                text={this.props.appState.errorPageText}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
