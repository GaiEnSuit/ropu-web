import React, { Component } from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class NewsFeedItem extends Component {
  
  render() {
		return (
			<Card>
				<CardMedia title="Portrait" image={this.props.newsFeedItem.img} style={{height: '350px'}} />
				<CardContent>
					{this.props.newsFeedItem.title}
				</CardContent>
			</Card>
		)
  }
}

export default NewsFeedItem;