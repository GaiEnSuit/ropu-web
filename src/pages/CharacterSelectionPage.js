// React
import React from 'react';

import { View, Text, ScrollView } from 'react-native';

// Cards
import CharacterSelectionCard from '../cards/CharacterSelectionCard';

// headers
import AppBar from '../headers/AppBar';
import TitleBar from '../headers/TitleBar';

// Styles
import styles from '../styles/styles';

// HOC
import withModal from '../hoc/withModal';
import withCharacterDataControl from '../hoc/withCharacterDataControl';

// Buttons
import CreatePlayerCharacterButton from '../touchables/CreatePlayerCharacterButton';
import BackButton from '../touchables/BackButton';

// state
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    characterSelectionPageTitle: state.characterSelectionPageTitle,
    characterListData: state.characterListData
  }
}

// Character Selection List
const ConnectedCharacterSelectionList = (props) => {
  if (props.characterListData.length <= 0) {
    return (
      <ScrollView
        style={styles.flex1}
      >
        <Text
        >
          {props.text.noCharacters}
        </Text>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView
        style={styles.flex1}
      >
        {
          props.characterListData.map((character) => {
            return(
              <View
                key={character.id}
              >
                <CharacterSelectionCard
                  character={character}
                  {...props}
                />
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}

const CharacterSelectionList = connect(mapStateToProps)(ConnectedCharacterSelectionList);

// Footer
const ActionBar = (props) => {
  return(
    <View
      style={[
        styles.vw100,
        styles.directionRow,
        styles.justifyBetween,
        styles.padding12
      ]}
    >
      <BackButton />
      <CreatePlayerCharacterButton />
    </View>
  )
}

// Layout
const ConnectedCharacterSelectionPage = (props) => {
  return (
    <View
      style={[
        styles.flex1
      ]}
    >
      <AppBar />
      <TitleBar title={props.characterSelectionPageTitle} />
      <CharacterSelectionList {...props} />
      <ActionBar {...props} />
    </View>
  )
}

const CharacterSelectionPage = connect(mapStateToProps)(ConnectedCharacterSelectionPage)

export default CharacterSelectionPage;
