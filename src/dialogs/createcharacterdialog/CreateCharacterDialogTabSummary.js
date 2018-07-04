import React from 'react';

// Material-UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// Higher Order Components
import withCharacterDataControl from '../../hoc/withCharacterDataControl';
import withDialogControl from '../../hoc/withDialogControl';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const CreateCharacterDialogTabSummary = (props) => {
  return(
    <div>
      <Card>
        {
          props.createCharacterData.img !== null?
          (
            <CardMedia title="portrait" image={props.createCharacterData.img} style={{height: '350px'}} />
          ) :
          (
            <AccountBoxIcon style={{width: "100%", height: "auto"}} />
          )
        }

        <CardContent>
          <Typography>Name: {props.createCharacterData.name}</Typography>
          <Typography>Description: {props.createCharacterData.description}</Typography>
        </CardContent>
        <CardContent>
          <Typography>Maximum Health Points: {props.createCharacterData.stats.maxhp}</Typography>
          <Typography>Maximum Mental Points: {props.createCharacterData.stats.maxmp} </Typography>
          <Typography>Maximum Stamina Points: {props.createCharacterData.stats.maxsp} </Typography>
        </CardContent>
        <CardContent>
          <Typography>Strength (STR) {props.createCharacterData.abilities.str}</Typography>
          <Typography>Endurance (END) {props.createCharacterData.abilities.end}</Typography>
          <Typography>Intelligence (INT) {props.createCharacterData.abilities.int}</Typography>
          <Typography>Will (WIL) {props.createCharacterData.abilities.wil}</Typography>
          <Typography>Dexterity (DEX) {props.createCharacterData.abilities.dex}</Typography>
          <Typography>Agility (AGI) {props.createCharacterData.abilities.agi}</Typography>
        </CardContent>
      </Card>
      <Button 
        disabled={
          props.createCharacterData.gameID === null? true: false
        }
        onClick={()=>{
          props.closeCreateCharacterDialog();
          props.setCreateCharacterID();
          props.addNewCharacter();
          props.resetCreateCharacter();
        }}
      >
        {props.createCharacterDialogText.complete}
      </Button>
    </div>
  )
}

export default withDialogControl(withCharacterDataControl(CreateCharacterDialogTabSummary));