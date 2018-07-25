import React, { Component } from 'react';

// Layout
import Grid from '@material-ui/core/Grid';

// Sections
import Version from './sections/Version';
import Copyright from './sections/Copyright';

// Styles
import styles from './styles/styles';

// Buttons
import A2HSButton from './buttons/A2HSButton';
import StartButton from './buttons/StartButton';

// HOC
import withTransitions from './hoc/withTransitions';
import withStartControl from './hoc/withStartControl';

// menus
import MainMenu from './menus/MainMenu';

// Sections
import Banner from './sections/Banner';

// Enhanced Components
const EnhancedBanner = withTransitions(Banner, 'fade', 1000, 500);
const EnhancedStartButton = withStartControl(StartButton);

// Layout
class HomePage extends Component {
  
  componentWillUnmount () {
    this.props.update({start: false})
  }
  
  render () {
    return (
      <main
        id="home"
        style={{...styles.vp100, ...this.props.style, ...styles.bgColorBlack, ...styles.overflowHidden}}
      >
        <Version {...this.props} />
        <A2HSButton />
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{
            ...styles.dim100,
            ...styles.margin0
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            style={{
              ...styles.width100,
              ...styles.flex1
            }}
          >
            <div
              style={{
                ...styles.displayFlex,
                ...styles.alignCenter,
                ...styles.dim100
              }}
            >
              <EnhancedBanner {...this.props} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            style={{
              ...styles.width100,
              ...styles.flex1
            }}
          >
            <div
              style={{
                ...styles.displayFlex,
                ...styles.justifyCenter,
                ...styles.alignCenter,
                ...styles.width100,
                ...styles.height100
              }}
            >
              {!this.props.start &&
                <EnhancedStartButton
                  {...this.props}
                />
              }
              {this.props.start &&
                <MainMenu {...this.props} />
              }
            </div> 
          </Grid>
        </Grid>
        <Copyright
          copyright={this.props.text.copyRight}
        />
      </main>
    )
  }
}

export default withTransitions(HomePage, 'fade', 500);