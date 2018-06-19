import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class InteractableCard extends Component {
  render() {
    return (
      <div>
				<Card>
					<CardMedia image={this.props.interactable.image} style={{height:'30px'}}/>
					<CardContent>
						<Typography></Typography>
					</CardContent>
				</Card>
      </div>
    );
  }
}

export default InteractableCard;