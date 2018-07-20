import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

// Icons
import ImageIcon from '@material-ui/icons/Image';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Higher Order Components
import withTabControl from '../hoc/withTabControl';
import withGameDataControl from '../hoc/withGameDataControl';

// Style overrides
import styles from '../styles/styles';

const CharacterCreationGameCard = (props) => {
  return (
    <Grid
      container
      style={styles.gridContainer}
    >
      <Grid
        item
        xs={12}
      >
        <Card
          style={{width: '100%'}}
        >
          {
            props.game.image !== null?
            (
              <CardMedia
                image={props.game.image}
                title={props.game.name}
                style={{height: '150px'}}
              />
            ) :
            (
              <ImageIcon style={{width: "100%", height: "auto"}} />
            )
          }
          <CardContent
          >
            <Typography variant="title" className="text-center">{props.game.name.toUpperCase()}</Typography>
            <Typography variant="subheading" className="text-center">{props.text.tags}</Typography>
            {props.game.tags.map((tag, index)=>{
              return(
                <Chip label={tag} key={index} />
              )
            })}
          </CardContent>
          <CardActions
            style={{display: "flex", justifyContent: "center"}}
          >
            <Button
            >
              {props.text.expand}
              <ExpandMoreIcon />
            </Button>
          </CardActions>
          <Collapse
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography variant="subheading">{props.text.description}</Typography>
              <Typography variant="body1">{props.game.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CharacterCreationGameCard;