import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

class InteractableCard extends Component {
  render() {
    return (
      <div>
				<Card>
					<CardMedia image={this.props.interactable.image} style={{height:'30px'}}/>
					<CardContent>
						<Typography variant='subheading'>{this.props.interactable.name}</Typography>
            <Typography variant='subheading'>{this.props.interactable.description}</Typography>
					</CardContent>
          <IconButton />
				</Card>
      </div>
    );
  }
}

export default InteractableCard;