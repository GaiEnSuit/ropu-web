import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Roller extends Component {
  constructor (props) {
		super(props);
		this.state = { roll: 0 };
	}
	
	makeRoll = () => {
		var value = Math.floor(Math.random()*11);
		this.setState({ roll: value });
	}
	
  render() {
    return (
      <div>
        <Button onClick={this.makeRoll}>Roll</Button>
				<Typography variant="display1">{this.state.roll}</Typography>
      </div>
    );
  }
}

export default Roller;