import React, { Component } from 'react';

import { View } from 'react-native';

// Routing
import { Switch, Route, Redirect, Router } from './routing/Routing';

// Layout Handling
import LayoutHandler from './modules/LayoutHandler';

// styles
import styles from './styles/styles';

// Pages
import TitlePage from './pages/TitlePage';
import HomePage from './pages/HomePage';
import CharacterSelectionPage from './pages/CharacterSelectionPage';
import CharacterCreationPage from './pages/CharacterCreationPage';
import StorySelectionPage from './pages/StorySelectionPage';
import PlayerViewPage from './pages/PlayerViewPage';
import HomebrewPage from './pages/HomebrewPage';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <View
        style={[
          styles.flex1,
          styles.vp100
        ]}
      >
        <LayoutHandler />
        <Router>
          {/* Main Section */}
          <Switch>
            {/* Home Page*/}
            <Route
              exact
              path='/'
              render={() =>
                <TitlePage />
              }
            />
            {/* Home Page*/}
            <Route
              exact
              path='/home'
              render={() =>
                <HomePage />
              }
            />
            {/* Character Selection Page */}
            <Route
              exact
              path='/characterselection'
              render={() =>
                <CharacterSelectionPage />
              }
            />
            {/* Character Creation Page */}
            {/*<Route
              exact
              path='/charactercreation'
              render={() =>
                <CharacterCreationPage />
              }
            />*/}
            {/* Player View Page */}
            {/*<Route
              path='/playerview/:id?'
              render={({match}) =>
                this.props.appState.characterListData.find(x => x.id === parseInt(match.params.id, 10)) === undefined?
                  (
                    <Redirect to='/404' />
                  ) : (
                    <PlayerViewPage />
                  )
              }
            />*/}
            {/* Story Page */}
            {/*<Route
              exact
              path='/storyselection'
              render={() =>
                <StorySelectionPage />
              }
            />*/}
            {/* Home Brew Page */}
            {/*<Route
              exact
              path='/homebrew'
              render={() =>
                <HomebrewPage />
              }
            />*/}
            {/* Page Not Found */}
            <Route
              render={() =>
                <ErrorPage />
              }
            />
          </Switch>
        </Router>
      </View>
    );
  }
}

export default App;
