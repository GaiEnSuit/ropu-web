import React, { Component } from 'react';

// menus
import MainMenu from '../menus/MainMenu';

// Buttons
import Button from '@material-ui/core/Button';

// styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

class StartButton extends Component {
  
  state = {
    start: false
  }
  
  render(){
    if (this.state.start) {
      return(
        <MainMenu {...this.props} />
      )
    } else {
      return (
        <Button
          onClick={()=>{
            this.setState({start: true});
            this.props.updateDialog(true);
          }}
          onClose={()=>{
            this.setState({start: false});
          }}
        >
          <Typography
            style={{...styles.colorWhite}}
          >
            TOUCH to START
          </Typography>
        </Button>
      )
    }
  }
}

export default StartButton;