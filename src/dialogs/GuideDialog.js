import React from 'react';

// Material-Ui
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Higher Order Components
import withDialogControl from '../../hoc/withDialogControl';

// Guide Dialog List
const GuideDialogList = (props) => {
  return(
    <div>
      {props.guideDialogData.map((data, index)=> {
        return(
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{data.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {data.text}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </div>
  )
}

// Layout

const GuideDialog = (props) => {
  return (
    <Dialog
      open={props.guideDialog}
      fullScreen
      aria-labelledby="dynamic dialog"
    >
      <DialogActions>
        <IconButton
          onClick={()=>{
            props.updateDialog(false, 'guideDialog')
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogTitle>
        {props.guideDialogText.title}
      </DialogTitle>
      {/* Guide Expansion Panels */}
      <GuideDialogList
        guideDialogData={props.guideDialogData}
        update={props.update}
      />
    </Dialog>
  )
}

export default withDialogControl(GuideDialog);