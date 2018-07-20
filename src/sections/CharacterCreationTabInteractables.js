import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';
import withGameDataControl from '../hoc/withGameDataControl';
import withDialogControl from '../hoc/withDialogControl';
import withTabControl from '../hoc/withTabControl';

const SelectedTemplateInteractableListItem = (props) => {
  return (
    <ListItem
      onClick={()=>{
        props.openInteractableCardDialog(props.item)
      }}
    >
      <ListItemIcon>
        <img className="icon-64px" src={props.item.image} alt="Interactable"/>
      </ListItemIcon>
      <ListItemText>
        {props.item.name}
      </ListItemText>
    </ListItem>
  )
}

const SelectedTemplateInteractableList = (props) => {
  return (
    props.selectedTemplate.interactableListData.map((item, index)=>{
      return (
        <Paper key={index}>
          <SelectedTemplateInteractableListItem item={item} {...props} />
        </Paper>
      )
    })
  )
}

const SelectedTemplate = (props) => {
  if (props.selectedTemplate === null) {
    return (
      null
    )
  } else {
    return (
      <div>
        <Typography>{props.text.selectedTemplate}</Typography>
        <Typography>{props.selectedTemplate.name}</Typography>
        <Typography>{props.text.description}</Typography>
        <Typography>{props.selectedTemplate.description}</Typography>
        <Typography>{props.text.startingInteractbles}</Typography>
        <List>
          <SelectedTemplateInteractableList {...props} />
        </List>
        <Button
          onClick={props.nextCreateCharacterDialogTab}
        >
          {props.text.continue}
        </Button>
      </div>
    )
  }
  
}

const TemplateList = (props) => {
  if ( props.selectedGame === null || props.selectedGame.templateInteractableListData === undefined || props.selectedGame.templateInteractableListData.length === 0) {
    return (
      <Typography>{props.text.gameNotSelected}</Typography>
    )
  } else {
    return (props.selectedGame.templateInteractableListData.map((template, index)=>{
      return (
        <Paper key={index}>
          <ListItem
            onClick={()=>{
              props.selectTemplate(template);
              props.clearCreateCharacterTemplate();
              props.setCreateCharacterTemplate(template);
            }}
          >
            <ListItemText>
              {template.name}
            </ListItemText>
          </ListItem>
        </Paper>
      )
    }))
  }
}

const CharacterCreationTabInteractables = (props) => {
  return (
    <div>
      <SelectedTemplate {...props}/>
      <Typography>
        {
          props.selectedTemplate === null?
            (
              props.text.selectTemplate
            ) : (
              props.text.changeTemplate
            )
        }
      </Typography>
      <List>
        <TemplateList {...props} />
      </List>
      
    </div>
  )
}

export default withTabControl(withDialogControl(withGameDataControl(withCharacterDataControl(CharacterCreationTabInteractables))));