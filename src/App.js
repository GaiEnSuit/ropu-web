import React, { Component } from 'react';

import { View } from 'react-native';

// Routing
import { Switch, Route, Redirect, Router } from './routing/Routing';

// Layout Handling
import LayoutHandler from './modules/LayoutHandler';

// styles
import styles from './styles/styles';

// Pages
import TitlePage from './TitlePage';
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
      <View
        style={[
          styles.flex1,
          styles.vp100
        ]}
      >
        <LayoutHandler update={this.props.setAppState} />
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
            {/*<Route
              exact
              path='/characterselection'
              render={() =>
                <CharacterSelectionPage />
              }
            />*/}
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
