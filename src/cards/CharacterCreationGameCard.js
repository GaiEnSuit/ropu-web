import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

// Icons
import ImageIcon from '@material-ui/icons/Image';

// Style overrides
import styles from '../styles/styles';

const CharacterCreationGameCard = (props) => {
  return (
    <Card
      style={styles.dim100}
    >
      {
        props.game.image === null?
        (
          <CardMedia
            image={props.game.image}
            title={props.game.name}
            style={{height: '30vh'}}
          />
        ) :
        (
          <CardMedia
            component={ImageIcon}
            title={props.game.name}
            style={{height: '30vh'}}
          />
        )
      }
      <CardContent
        style={styles.overflowHidden}
      >
        <Typography variant="title" className="text-center">{props.game.name.toUpperCase()}</Typography>
        <Typography variant="subheading" className="text-center">{props.text.tags}</Typography>
        {props.game.tags.map((tag, index)=>{
          return(
            <Chip label={tag} key={index} />
          )
        })}
      </CardContent>
      <CardContent
        style={styles.overflowHidden}
      >
        <Typography variant="subheading">{props.text.description}</Typography>
        <Typography variant="body1">{props.game.description}</Typography>
      </CardContent>
    </Card>
  )
}

export default CharacterCreationGameCard;
