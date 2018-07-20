import React from 'react';

// Material-Ui
import DialogContent from '@material-ui/core/DialogContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// Headers
import RopuDialogTitle from '../headers/RopuDialogTitle';

// Footers
import DialogCardActions from '../footers/DialogCardActions';

// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

// Guide Dialog List
const GuideDialogContent = (props) => {
  return(
    <DialogContent
      style={{...styles.dialogContent, ...styles.dim100}}
    >
      {props.guideDialogData.map((data, index)=> {
        return(
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="subheading"
              >
                {data.title}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {data.text}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </DialogContent>
  )
}

// Layout
const GuideDialog = (props) => {
  return (
    <div
      style={{...styles.displayFlex, ...styles.directionColumn}}
    >
      <RopuDialogTitle {...props} title={props.text.guide} />
      <GuideDialogContent {...props} />
      <DialogCardActions {...props} />
    </div>
  )
}

export default GuideDialog;