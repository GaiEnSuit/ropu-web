import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
	render() {
		return(
			<Paper>
				<Typography variant='body2'>{this.props.version}</Typography>
			</Paper>
		)
	}
}

export default Footer;