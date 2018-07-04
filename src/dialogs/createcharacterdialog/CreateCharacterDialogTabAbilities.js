import React from 'react';

// Material-ui
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

// Higher Order Components
import withCharacterDataControl from '../../hoc/withCharacterDataControl';

// Icons
import strengthIcon from '../../images/strength.svg'

const CreateCharacterDialogTabAbilities = (props) => {
  return(
    <div>
      <Paper>
        <Avatar>
          <img src={strengthIcon} alt="strength icon" style={{width: "100%"}} />
        </Avatar>
        {props.createCharacterData.abilities.str}
      </Paper>
      <Paper>
        {props.createCharacterData.abilities.end}
      </Paper>
      <Paper>
        {props.createCharacterData.abilities.int}
      </Paper>
      <Paper>
        {props.createCharacterData.abilities.wil}
      </Paper>
      <Paper>
        {props.createCharacterData.abilities.dex}
      </Paper>
      <Paper>
        {props.createCharacterData.abilities.agi}
      </Paper>
    </div>
  )
}

export default withCharacterDataControl(CreateCharacterDialogTabAbilities);