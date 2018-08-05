// React
import React from 'react';

import { View, Text, ScrollView } from 'react-native';

// Custom Components
import TitleBar from '../headers/TitleBar';
import CharacterSelectionCard from '../cards/CharacterSelectionCard';

// Styles
import styles from '../styles/styles';

// HOC
import withDialog from '../hoc/withDialog';
import withCharacterDataControl from '../hoc/withCharacterDataControl';
import withNavigation from '../hoc/withNavigation';

// Dialogs
import DeleteCharacterDialog from '../dialogs/DeleteCharacterDialog';

// Buttons
import CreatePlayerCharacterButton from '../buttons/CreatePlayerCharacterButton';
import BackButton from '../buttons/BackButton';

//Character Selection Cards Slide
const EnhancedCharacterSelectionCard = withCharacterDataControl(withDialog(CharacterSelectionCard, DeleteCharacterDialog));

// Back BUtton to HOme screen
const EnhancedBackButton = withNavigation(BackButton, '/');

// Character Selection List
const CharacterSelectionList = (props) => {
  if (props.characterListData.length <= 0) {
    return (
      <ScrollView
        style={[
          styles.displayFlex,
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1
        ]}
      >
        <Text
          style={styles.colorWhite}
        >
          {props.text.noCharacters}
        </Text>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView>
          {props.characterListData.map((character) => {
            return(
              <View
                key={character.id}
              >
                <EnhancedCharacterSelectionCard
                  character={character}
                  {...props}
                />
              </View>
            )
          })}
      </ScrollView>
    )
  }
}

// Footer
const CharacterSelectionActionBar = (props) => {
  return(
    <View
      style={[
        styles.bgColorTransparant,
        styles.actionBar,
        styles.directionRow,
        styles.justifyBetween,
        styles.positionFixed,
        styles.width100,
        styles.positionBottom
      ]}
    >
      <EnhancedBackButton
        {...props}
      />
      <CreatePlayerCharacterButton />
    </View>
  )
}

// Layout
const CharacterSelectionPage = (props) => {
  return (
    <View
      style={[
        styles.bgColorWhite,
        styles.flex1
      ]}
    >
      <TitleBar
        {...props}
      />
      <CharacterSelectionList
        {...props}
      />
      <CharacterSelectionActionBar
        {...props}
      />
    </View>
  )
}

export default CharacterSelectionPage;
