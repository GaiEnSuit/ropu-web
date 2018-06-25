import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
	render() {
		return(
			<Paper>
				<Typography variant="body1">{this.props.version}</Typography>
        <Typography variant="title">{this.props.footer.credits.text}</Typography>
        <a className="link" href={this.props.footer.credits.data[0].profile}><Typography variant="body2">{this.props.footer.credits.data[0].name}</Typography></a>
        <a className="link" href={this.props.footer.credits.data[0].licenseUrl}><Typography variant="body2">{this.props.footer.credits.data[0].license}</Typography></a>
			</Paper>
		)
	}
}

export default Footer;