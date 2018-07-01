import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

//Icons
import HelpIcon from '@material-ui/icons/Help';

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';

const GuideButton = (props) => {
  return (
    <IconButton onClick={props.openGuideDialog}>
      <HelpIcon />
    </IconButton>
  )
}

export default withDialogControl(GuideButton);