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

// Guide Dialog List
const GuideDialogContent = (props) => {
  return(
    <ScrollView
      style={[
        styles.flex1
      ]}
    >
      {props.guideDialogData.map((data, index)=> {
        return(
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Text>
                {data.title}
              </Text>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Text>
                {data.text}
              </Text>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
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
        <RopuDialogTitle {...props} title={props.text.guide} />
        <GuideDialogContent {...props} />
      </View>
    </Dialog>
  )
}

export default GuideDialog;