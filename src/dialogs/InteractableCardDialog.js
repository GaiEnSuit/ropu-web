import React from 'react';

// Material-UI
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Higher Order Component
import withDialogControl from '../hoc/withDialogControl';
import withGameDataControl from '../hoc/withGameDataControl';

const InteractableCardDialog = (props) => {
  return (
    <Dialog
      open={props.interactableCardDialog}
      onClose={()=>{
        props.updateDialog(false, "interactableCardDialog")
      }}
    >
      {props.selectedInteractable !== null &&
        <Card
          style={{
            maxWidth: '500px'
          }}
        >
          <CardMedia
            src={props.selectedInteractable.image}
            title={props.selectedInteractable.name}
          >
            <img className="responsive-image" src={props.selectedInteractable.image} alt={props.selectedInteractable.name} />
          </CardMedia>
          <CardContent>
            <Typography>{props.selectedInteractable.name}</Typography>
            <Typography>{props.selectedInteractable.type}</Typography>
            <Typography>{props.selectedInteractable.description}</Typography>
          </CardContent>
        </Card>
      }
    </Dialog>
  )
}

export default withGameDataControl(withDialogControl(InteractableCardDialog));