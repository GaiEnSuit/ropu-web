import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
	render() {
		return(
			<Paper>
				<Typography variant='body2'>{this.props.version}</Typography>
        <Typography variant='body2'>Credits</Typography>
        <a href="https://kyrise.itch.io/">Kyrise</a>
        <a href="https://creativecommons.org/licenses/by/4.0/">License Type: Creative Commons Attribution 4.0 International (CC BY 4.0) </a>
			</Paper>
		)
	}
}

export default Footer;