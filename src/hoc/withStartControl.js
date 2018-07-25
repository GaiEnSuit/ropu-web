import React, { Component } from 'react';

// Buttons
import Button from '@material-ui/core/Button';

const withStartControl = (WrappedComponent) => class extends Component {
  render(){
    return (
      <Button
        onClick={()=>{
          this.props.update({start: true});
        }}
      >
        <WrappedComponent
          {...this.props}
        />
      </Button>
    )
  }
}

export default withStartControl;