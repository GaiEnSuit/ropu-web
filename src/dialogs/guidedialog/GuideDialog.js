import React from 'react';

// Material-Ui
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Customer Components
import GuideDialogList from './GuideDialogList';

// Higher Order Components
import withDialogControl from '../../hoc/withDialogControl';

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