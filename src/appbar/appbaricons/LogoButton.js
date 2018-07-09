import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Images
import logo from '../../images/logo.svg';

// Material-UI Styles
import { withStyles } from '@material-ui/core/styles';

// Higher Order Component
import withDialogControl from '../../hoc/withDialogControl';

const styles = {
  root: {
    marginRight: 'auto'
  }
};

const LogoButton = (props) => {
  
  const { classes } = props;
  
  return (
    <IconButton
      classes={{
        root: classes.root
      }}
      onClick={()=>{
        props.updateDialog(true, "homeDialog")
      }}
    >
      <img  className="responsive-image" src={logo} alt="logo" />
    </IconButton>
  )
}

export default withDialogControl(withStyles(styles)(LogoButton));