import React from 'react';

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
import withDialog from './hoc/withDialog';

// Sections
import Banner from './sections/Banner';

// Components with Fade
const BannerWithAnimation = withTransitions(Banner, 'fade', 1000, 500);

// Open News Feed on Start Press
const StartButtonWithNewsFeedDialog = withDialog(StartButton, 'newsFeedDialog');

// Layout
const HomePage = (props) => {
  return (
    <main
      id="home"
      style={{...styles.vp100, ...props.style, ...styles.bgColorBlack, ...styles.overflowHidden}}
    >
      <Version {...props} />
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
            <BannerWithAnimation {...props} />
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
            <StartButtonWithNewsFeedDialog
              {...props}
            />
          </div>
        </Grid>
      </Grid>
      <Copyright
        copyright={props.text.copyRight}
      />
    </main>
  )
}

export default withTransitions(HomePage, 'fade', 500);