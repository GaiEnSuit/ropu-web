import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// Material-ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// Higher Order Components
import withCharacterDataControl from '../../../hoc/withCharacterDataControl';

// Custom Components
import CharacterListItemCardContent from './CharacterListItemCardContent';
import CharacterListItemCardActions from './CharacterListItemCardActions';
import CharacterListItemCardMedia from './CharacterListItemCardMedia';

const CharacterListItem = (props) => {
  return(
    <Card raised={true} >
      <Link to={`/playerview/${props.character.id}`} className="link">
        <Grid
          container
        >
          <Grid
            item
            xs={4}
          >
            <CharacterListItemCardMedia {...props} />
          </Grid>
          <Grid
            item
            xs={8}
          >
            <CharacterListItemCardContent {...props} />
          </Grid>
        </Grid>
      </Link>
      <Divider />
      <CharacterListItemCardActions {...props} />
    </Card>
  )
}

export default withCharacterDataControl(CharacterListItem);