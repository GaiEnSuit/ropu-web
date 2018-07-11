import React from 'react';

// Material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// Higher Order Components
import withCharacterDataControl from '../../../hoc/withCharacterDataControl';
import withTabControl from '../../../hoc/withTabControl';

const CreateCharacterDialogTabDescription = (props) => {
  return(
    <div>
      <div>
        <Typography>{props.createCharacterDialogText.selectImage}</Typography>
        <AccountBoxIcon style={{width: "100%", height: "auto"}} />
        <Button disabled>
          Upload (Feature Unavailable)
        </Button>
      </div>
      <div>
        <TextField
          id="name"
          label={props.createCharacterDialogText.name}
          placeholder={props.createCharacterDialogText.placeholderName}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event)=>{props.updateCreateCharacterName(event)}}
          value={props.createCharacterData.name}
          margin="normal"
        >
        </TextField>
      </div>
      <div>
        <TextField
          id="description"
          label={props.createCharacterDialogText.description}
          placeholder={props.createCharacterDialogText.placeholderDescription}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event)=>{props.updateCreateCharacterDescription(event)}}
          value={props.createCharacterData.description}
          multiline
          rows="4"
          margin="normal"
        >
        </TextField>
      </div>
      {props.createCharacterData.name !== '' && props.createCharacterData.description !== '' &&
        <Button
          onClick={props.nextCreateCharacterDialogTab}
        >
          {props.createCharacterDialogText.continue}
        </Button>
      }
    </div>
  )
}

export default withTabControl(withCharacterDataControl(CreateCharacterDialogTabDescription));