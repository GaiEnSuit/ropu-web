import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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

// Style Overrides
import styles from '../../../../styles';

const SelectedGame = (props) => {
  if (props.createCharacterData.game) {
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
              props.selectedGame.image !== null?
              (
                <CardMedia
                  image={props.selectedGame.image}
                  title={props.selectedGame.name}
                  style={{height: '150px'}}
                />
              ) :
              (
                <ImageIcon style={{width: "100%", height: "auto"}} />
              )
            }
            <CardContent
            >
              <Typography variant="title" className="text-center">{props.selectedGame.name.toUpperCase()}</Typography>
              <Typography variant="subheading" className="text-center">{props.createCharacterDialogText.tags}</Typography>
              {props.selectedGame.tags.map((tag, index)=>{
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
                {props.createCharacterDialogText.expand}
                <ExpandMoreIcon />
              </Button>
            </CardActions>
            <Collapse
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography variant="subheading">{props.createCharacterDialogText.description}</Typography>
                <Typography variant="body1">{props.selectedGame.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    )
  } else return null
}

export default SelectedGame;