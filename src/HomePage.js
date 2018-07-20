import React from 'react';

// Layout
import Grid from '@material-ui/core/Grid';

// Menus
import MainMenu from './menus/MainMenu';

// Sections
import Version from './sections/Version';
import Copyright from './sections/Copyright';

// Styles
import styles from './styles/styles';

// HOC
import withTransitions from './hoc/withTransitions';

// Sections
import Banner from './sections/Banner';

// Components with Fade
const MainMenuWithZoom = withTransitions(MainMenu, 'fade', 1000, 1000);
const BannerWithFade = withTransitions(Banner, 'fade', 1000, 500);

// Layout
const HomePage = (props) => {
  return (
    <main
      id="home"
      style={{...styles.vh100, ...props.style, ...styles.bgColorBlack, ...styles.overflowHidden}}
    >
      <Version {...props} />
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        spacing={24}
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
            <BannerWithFade {...props} />
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
            <MainMenuWithZoom
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