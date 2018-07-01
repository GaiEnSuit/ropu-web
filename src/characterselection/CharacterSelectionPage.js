// React
import React from 'react';

// Material-Ui
import Typography from '@material-ui/core/Typography';

// Custom Components
import CreateCharacterListItem from './CreateCharacterListItem';
import CharacterList from './CharacterList';

const CharacterSelectionPage = (props) => {
  return (
    <div>
      {/* Title */}
      <Typography variant="title">{props.characterSelectionPageText.title}</Typography>
      {/* List of Characters */}
      <CharacterList
        characterListData={props.characterListData}
        update={props.update}
      />
      {/* List item that creates new character on click */}
      <CreateCharacterListItem update={props.update} />
    </div>
  )
}

export default CharacterSelectionPage;