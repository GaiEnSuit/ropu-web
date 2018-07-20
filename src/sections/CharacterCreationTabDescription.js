import React from 'react';

// Material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';
import withTabControl from '../hoc/withTabControl';

const CharacterCreationTabDescription = (props) => {
  return(
    <div>
      <div>
        <Typography>{props.text.selectImage}</Typography>
        <AccountBoxIcon style={{width: "100%", height: "auto"}} />
        <Button disabled>
          Upload (Feature Unavailable)
        </Button>
      </div>
      <div>
        <TextField
          id="name"
          label={props.text.name}
          placeholder={props.text.placeholderName}
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
          label={props.text.description}
          placeholder={props.text.placeholderDescription}
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
          {props.text.continue}
        </Button>
      }
    </div>
  )
}

export default withTabControl(withCharacterDataControl(CharacterCreationTabDescription));