import React from 'react';

// Material-ui
import CardMedia from '@material-ui/core/CardMedia';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const CharacterListItemCardMedia = (props) => {
  return(
    <CardMedia
      image={props.character.img}
      title="Character Portrait"

      className="responsive-portrait"
    >
      {props.character.img === null && <AccountBoxIcon className="responsive-portrait" />}
    </CardMedia>
  )
}

export default CharacterListItemCardMedia;