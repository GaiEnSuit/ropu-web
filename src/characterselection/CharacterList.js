// React
import React from 'react';

// Material-Ui
import List from '@material-ui/core/List';

// Custom Components
import CharacterListItem from './CharacterListItem';

const CharacterList = (props) => {
  return (
    <List>
      {props.characterListData.map((character) => {    
        return(
          <CharacterListItem
            key={character.id}
            characterListItem={character}
          />
        )
      })}
    </List>
  )
}

export default CharacterList;