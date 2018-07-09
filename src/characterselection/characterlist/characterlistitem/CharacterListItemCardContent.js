import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const CharacterListItemCardContent = (props) => {
  return(
    <CardContent>
      {props.character.name === ''?
        (
          <Typography variant="display1" noWrap={true}>{props.characterSelectionPageText.noName}</Typography>
        ) :
        (
          <Typography variant="display1" noWrap={true}>{props.character.name}</Typography>
        )
      }
      <Typography variant="subheading" noWrap={true}>{props.character.game}</Typography>
      {props.character.story === null?
        (
          <Typography variant="subheading" noWrap={true}>{props.characterSelectionPageText.noStory}</Typography>
        ) :
        (
          <Typography variant="subheading" noWrap={true}>{props.character.story}</Typography>
        )
      }
    </CardContent>
  )
}

export default CharacterListItemCardContent;