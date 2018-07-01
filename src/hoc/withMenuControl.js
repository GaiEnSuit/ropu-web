import React, { Component } from 'react';

const withMenuControl = (WrappedComponent) => class extends Component {
  
  setAnchor = (e) => {
    this.props.update({anchorEl: e.currentTarget})
  }
  
  closeMenu = () => {
    this.props.update({anchorEl: null})
  }
  
  render(){
    return (
      <WrappedComponent
        setAnchor={this.setAnchor}
        {...this.props}
      />
    )
  }
}

export default withMenuControl;