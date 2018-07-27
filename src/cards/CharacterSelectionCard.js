import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// Material-ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DeleteIcon from '@material-ui/icons/Delete';

// Style Classes
import styles from '../styles/styles';

// Portrait
const CharacterListItemCardMedia = (props) => {
  return(
    <Link to={`/playerview/${props.character.id}`}>
      <CardMedia
        image={props.character.img}
        title={props.character.img}
        style={{...styles.dim100, ...styles.bgColorTransparentBlack}}
      >
        {!props.character.img &&
          <AccountBoxIcon
            style={[
              styles.dim100,
              styles.colorWhite,
              styles.bgColorTransparentBlack
            ]}
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
        style={[styles.bgColorDarkRed, styles.colorWhite]}
      >
        {props.character.name === ''?
          (
            <Typography variant="headline" noWrap color="inherit">{props.text.noName}</Typography>
          ) :
          (
            <Typography variant="headline" noWrap color="inherit">{props.character.name}</Typography>
          )
        }
        <Typography variant="body1" noWrap color="inherit">{props.character.game}</Typography>
        {props.character.story === null?
          (
            <Typography variant="body1" noWrap color="inherit">{props.text.noStory}</Typography>
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
      style={[styles.bgColorDarkRed, styles.displayFlex, styles.justifyEnd]}
    >
      <IconButton
        style={styles.colorWhite}
        onClick={()=>{
          props.updateDialog(true, "deleteDialog");
          props.selectCharacter(props.character);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </CardActions>
  )
}

const CharacterSelectionCard = (props) => {
  return(
    <Card
      raised={true}
      style={[
        styles.bgColorTransparentMediumRed,
        styles.dim100,
        props.style
      ]}
    >
      <Grid
        container
        spacing={8}
        style={[
          styles.dim100,
          styles.margin0
        ]}
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
          <CharacterListItemCardActions {...props} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default CharacterSelectionCard;