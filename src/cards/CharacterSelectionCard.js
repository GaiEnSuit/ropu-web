import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// Material-ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DeleteIcon from '@material-ui/icons/Delete';

// HOC
import withDialog from '../hoc/withDialog';
import withCharacterDataControl from '../hoc/withCharacterDataControl';

// Dialogs
import DeleteCharacter from '../dialogs/DeleteCharacter'

// Style Classes
import styles from '../styles/styles';

// Portrait
const CharacterListItemCardMedia = (props) => {
  return(
    <Link to={`/playerview/${props.character.id}`}>
      <CardMedia
        image={props.character.img}
        title="Character Portrait"
        style={{...styles.dim100, ...styles.bgColorTransparentBlack}}
      >
        {!props.character.img &&
          <AccountBoxIcon
            style={{
              ...styles.dim100,
              ...styles.colorWhite,
              ...styles.bgColorTransparentBlack
            }}
          />
        }
      </CardMedia>
    </Link>
  )
}

// Character Summary
const CharacterListItemCardContent = (props) => {
  return(
    <Link to={`/playerview/${props.character.id}`}>
      <CardContent
        style={{...styles.bgColorDarkRed, ...styles.colorWhite}}
      >
        {props.character.name === ''?
          (
            <Typography variant="headline" noWrap color="inherit">{props.characterSelectionPageText.noName}</Typography>
          ) :
          (
            <Typography variant="headline" noWrap color="inherit">{props.character.name}</Typography>
          )
        }
        <Typography variant="body1" noWrap color="inherit">{props.character.game}</Typography>
        {props.character.story === null?
          (
            <Typography variant="body1" noWrap color="inherit">{props.characterSelectionPageText.noStory}</Typography>
          ) :
          (
            <Typography variant="body1" noWrap color="inherit">{props.character.story}</Typography>
          )
        }
      </CardContent>
    </Link>
  )
}

// Card Actions
const CharacterListItemCardActions = (props) => {
  return(
    <CardActions
      style={{...styles.bgColorRed, ...styles.displayFlex, ...styles.justifyCenter}}
      onClick={()=>{
        props.updateDialog(true, "deleteDialog", "fullWidth");
        props.selectCharacter(props.character);
      }}
    >
      <Button
        style={styles.colorWhite}
      >
        <DeleteIcon />
        {props.characterSelectionPageText.delete}
      </Button>
    </CardActions>
  )
}

const EnhancedCharacterListItemCardActions = withCharacterDataControl(withDialog(CharacterListItemCardActions, DeleteCharacter));

const CharacterSelectionCard = (props) => {
  return(
    <Card
      raised={true}
      style={{
        ...styles.bgColorTransparentMediumRed,
        ...styles.dim100
      }}
    >
      <Grid
        container
        spacing={8}
        style={{
          ...styles.dim100,
          ...styles.margin0
        }}
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
          <Divider />
          <EnhancedCharacterListItemCardActions {...props} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default CharacterSelectionCard ;