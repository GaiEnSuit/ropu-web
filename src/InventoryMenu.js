import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

class InventoryMenu extends Component {
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab />
          <Tab />
          <Tab />
        </Tabs>
      </Paper>
    )
  }
}

export default InventoryMenu;