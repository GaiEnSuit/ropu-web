import React, { Component } from 'react';

// Icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Material-UI
import Typography from '@material-ui/core/Typography';

// styles
import styles from '../styles/styles';

const withLoader = (WrappedComponent) => class extends Component {
  render(){
    if (navigator.onLine) {
      return (
        <div
          style={{...styles.vp100, ...styles.spinnerBackground}}
        >
          <WrappedComponent
            {...this.props}
          />
        </div>
      )
    } else {
      return(
        <div
          style={{...styles.dim100, ...styles.displayFlex, ...styles.justifyCenter, ...styles.alignCenter, ...styles.directionColumn}}
        >
          <ErrorOutlineIcon
            style={styles.icon64}
          />
          <Typography
            className="text-center"
            variant="headline"
          >
            {this.props.offline}
          </Typography>
        </div>
      )
    }
  }
}

export default withLoader;