import React from 'react';

import { View, ScrollView, Text } from 'react-native';

// Material-Ui
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Dialog from '@material-ui/core/Dialog';

// Headers
import RopuDialogTitle from '../headers/RopuDialogTitle';

// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// styles
import styles from '../styles/styles';

const GuideAbout = (props) => {
  return(
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Text>
          {props.text.title}
        </Text>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Text>
          {props.text.text}
        </Text>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

const Overview = (props) => {
  return(
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Text>
          {props.text.title}
        </Text>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{flexDirection: 'column'}}
      >
        <Text>
          {props.text.step1}
        </Text>
        <Text>
          {props.text.step2}
        </Text>
        <Text>
          {props.text.step3}
        </Text>
        <Text>
          {props.text.step4}
        </Text>
        <Text>
          {props.text.step5}
        </Text>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

const GM = (props) => {
  return(
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Text>
          {props.text.title}
        </Text>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{flexDirection: 'column'}}
      >
        <Text>
          {props.text.text}
        </Text>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

// Guide Dialog List
const GuideDialogContent = (props) => {
  return(
    <ScrollView
      style={[
        styles.flex1
      ]}
    >
      <GuideAbout text={props.guideDialogData.about} />
      <Overview text={props.guideDialogData.flow} />
      <GM text={props.guideDialogData.gm} />
    </ScrollView>
  )
}

// Layout
const GuideDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={()=>{
        props.updateDialog(false, 'Guide Dialog Closed')
      }}
      fullScreen
    >
      <View
        style={styles.flex1}
      >
        <RopuDialogTitle
          {...props}
          title={props.text.guide}
        />
        <GuideDialogContent
          {...props}
        />
      </View>
    </Dialog>
  )
}

export default GuideDialog;
