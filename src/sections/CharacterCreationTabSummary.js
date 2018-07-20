import React from 'react';

// Material-UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';
import withDialogControl from '../hoc/withDialogControl';
import withTabControl from '../hoc/withTabControl';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const CharacterCreationTabSummary = (props) => {
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
          <Typography>Maximum Health Points: {props.createCharacterData.maxhp}</Typography>
          <Typography>Maximum Mental Points: {props.createCharacterData.maxmp} </Typography>
          <Typography>Maximum Stamina Points: {props.createCharacterData.maxsp} </Typography>
        </CardContent>
        <CardContent>
          <Typography>Strength (STR) {props.createCharacterData.str}</Typography>
          <Typography>Endurance (END) {props.createCharacterData.end}</Typography>
          <Typography>Intelligence (INT) {props.createCharacterData.int}</Typography>
          <Typography>Will (WIL) {props.createCharacterData.wil}</Typography>
          <Typography>Dexterity (DEX) {props.createCharacterData.dex}</Typography>
          <Typography>Agility (AGI) {props.createCharacterData.agi}</Typography>
        </CardContent>
      </Card>

    </div>
  )
}

export default withTabControl(withDialogControl(withCharacterDataControl(CharacterCreationTabSummary)));