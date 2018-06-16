import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class CallToAction extends Component {
  render() {
    let callToActionList = this.props.callToAction.map((callToActionItem, index) => {
      return (
				<Link to={callToActionItem.url} key={index}>
        	<ListItem>
            <ListItemText >
              <Typography variant="title">{callToActionItem.text}</Typography>
            </ListItemText>
        	</ListItem>
				</Link>
      )
    });
    
    return (
			<Paper>
				<List>
					{callToActionList}
				</List>
			</Paper>
    );
  }
}

export default CallToAction;