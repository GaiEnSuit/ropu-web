import React from 'react';

import { View, Text, Image } from 'react-native';

// Style Classes
import styles from '../styles/styles';

// Portrait
const Portrait = (props) => {
  return(
    <View to={`/playerview/${props.character.id}`}>
      <View
      >
        {!props.character.img &&
          <Image
            style={[
              styles.dim100,
              styles.colorWhite,
              styles.bgColorTransparentBlack
            ]}
          />
        }
      </View>
    </View>
  )
}

// Character Summary
const CharacterListItemView = (props) => {
  return(
    <View to={`/playerview/${props.character.id}`}>
      <View
      >
        {props.character.name === ''?
          (
            <Text variant="headline" >{props.text.noName}</Text>
          ) :
          (
            <Text variant="headline" >{props.character.name}</Text>
          )
        }
        <Text variant="body1" >{props.character.game}</Text>
        {props.character.story === null?
          (
            <Text variant="body1" >{props.text.noStory}</Text>
          ) :
          (
            <Text variant="body1" >{props.character.story}</Text>
          )
        }
      </View>
    </View>
  )
}

// View Actions
const Actions = (props) => {
  return(
    <View
    >
      <View
        onClick={()=>{
          props.updateDialog(true, "deleteDialog");
          props.selectCharacter(props.character);
        }}
      >
        <Image />
      </View>
    </View>
  )
}

const CharacterSelectionView = (props) => {
  return(
    <View
      raised={true}
      style={[
      ]}
    >
      <View
        container
        spacing={8}
        style={[
        ]}
      >
        <View
          item
          xs={4}
        >
          <Portrait {...props} />
        </View>
        <View
          item
          xs={8}
        >
          <CharacterListItemView {...props} />
          <Actions {...props} />
        </View>
      </View>
    </View>
  )
}

export default CharacterSelectionView;
