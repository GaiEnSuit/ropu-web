import React from 'react';

// Material-ui
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';

// Icons
import strengthIcon from '../images/strength.svg';
import enduranceIcon from '../images/endurance.svg';
import intelligenceIcon from '../images/intelligence.svg';
import willIcon from '../images/will.svg';
import dexterityIcon from '../images/dexterity.svg';
import agilityIcon from '../images/agility.svg';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const TotalAbility = (props) => {
    let total = props.createCharacterData.str
      + props.createCharacterData.end
      + props.createCharacterData.int
      + props.createCharacterData.wil
      + props.createCharacterData.dex
      + props.createCharacterData.agi;
  
    return (
      <Typography >
        {total}
      </Typography>
    )
  }

const CreateCharacterTabAbilities = (props) => {
  return(
    <div>
      <Grid
        container
        spacing={24}
      >
        <Grid
          item
          xs={4}
        >
          <Paper>
            <img src={strengthIcon} alt="strength icon" style={{width: "100%"}} />
            <Typography>
              {props.text.strength}
            </Typography>
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("str", "increase")
              }}
              disabled={props.createCharacterData.str >= 3}
            >
              <ArrowUpwardIcon />
            </Button>
            {props.createCharacterData.str}
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("str", "decrease")
              }}
              disabled={props.createCharacterData.str <= - 3}
            >
              <ArrowDownwardIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Paper>
            <img src={enduranceIcon} alt="endurance icon" style={{width: "100%"}} />
            <Typography>
              {props.text.endurance}
            </Typography>
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("end", "increase")
              }}
              disabled={props.createCharacterData.end >= 3}
            >
              <ArrowUpwardIcon />
            </Button>
            {props.createCharacterData.end}
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("end", "decrease");
              }}
              disabled={props.createCharacterData.end <= -3}
            >
              <ArrowDownwardIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Paper>
            <img src={intelligenceIcon} alt="intelligence icon" style={{width: "100%"}} />
            <Typography>
              {props.text.intelligence}
            </Typography>
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("int", "increase")
              }}
              disabled={props.createCharacterData.int >= 3}
            >
              <ArrowUpwardIcon />
            </Button>
            {props.createCharacterData.int}
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("int", "decrease")
              }}
              disabled={props.createCharacterData.int <= -3}
            >
              <ArrowDownwardIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Paper>
            <img src={willIcon} alt="will icon" style={{width: "100%"}} />
            <Typography>
              {props.text.will}
            </Typography>
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("wil", "increase");
              }}
              disabled={props.createCharacterData.wil >= 3}
            >
              <ArrowUpwardIcon />
            </Button>
            {props.createCharacterData.wil}
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("wil", "decrease");
              }}
              disabled={props.createCharacterData.wil <= -3}
            >
              <ArrowDownwardIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Paper>
            <img src={dexterityIcon} alt="dexterity icon" style={{width: "100%"}} />
            <Typography>
              {props.text.dexterity}
            </Typography>
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("dex", "increase")
              }}
              disabled={props.createCharacterData.dex >= 3}
            >
              <ArrowUpwardIcon />
            </Button>
            {props.createCharacterData.dex}
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("dex", "decrease")
              }}
              disabled={props.createCharacterData.dex <= -3}
            >
              <ArrowDownwardIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Paper>
            <img src={agilityIcon} alt="agility icon" style={{width: "100%"}} />
            <Typography>
              {props.text.agility}
            </Typography>
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("agi", "increase");
              }}
              disabled={props.createCharacterData.agi >= 3}
            >
              <ArrowUpwardIcon />
            </Button>
            {props.createCharacterData.agi}
            <Button
              onClick={()=>{
                props.updateCreateCharacterAbility("agi", "decrease");
              }}
              disabled={props.createCharacterData.agi <= -3}
            >
              <ArrowDownwardIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Paper>
            <Typography>
              {props.text.abilitiesTotal}
            </Typography>
            <TotalAbility {...props} />
          </Paper>
        </Grid>
      </Grid>
      <Typography>
        {props.text.abilitiesTotalInstructions}
      </Typography>
      <Button>
        {props.text.continue}
      </Button>
    </div>
  )
}

export default withCharacterDataControl(CreateCharacterTabAbilities);