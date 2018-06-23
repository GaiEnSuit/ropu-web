import React, { Component } from 'react';

//Material-Ui
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import IconButton from '@material-ui/core/IconButton';

//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';

class Rules extends Component {
  
  // Guide Expansion Panels
  guideDialogList = this.props.guideDialogData.map((data, index)=> {
    return (
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
  })
  
  render() {
    return (
      <Dialog
        open={this.props.guideDialog}
        fullScreen
        aria-labelledby="dynamic dialog"
      >
        <DialogActions>
          <IconButton onClick={()=>this.props.update({guideDialog: false})}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>
          {this.props.guideDialogTitle}
        </DialogTitle>
        {/* Guide Expansion Panels */}
        {this.guideDialogList}
      </Dialog>
    );
  }
}

export default Rules;