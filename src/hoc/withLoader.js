import React, { Component } from 'react';

// Icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Material-UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const withLoader = (WrappedComponent) => class extends Component {
  render(){
    return (
      <div>
      {!navigator.onLine?
          (
            <Paper
              className={this.props.classes.newsFeedEmpty}
            >
              <ErrorOutlineIcon
                className={this.props.classes.icon}
              />
              <Typography
                className="text-center"
                variant="headline"
              >
                {this.props.homePageText.offline}
              </Typography>
            </Paper>
          ) : 
          (
            <WrappedComponent
              {...this.props}
            />
          )
        }
      </div>
    )
  }
}

export default withLoader;