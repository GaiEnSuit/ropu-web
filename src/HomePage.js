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

// Layout
const HomePage = (props) => {
  return (
    <main
      id="home"
      style={{...styles.vh100, ...props.style, ...styles.bgColorMediumRed, ...styles.overflowHidden}}
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
            <Banner />
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
            <MainMenu
              play={props.homePageText.play}
              direct={props.homePageText.direct}
              homebrew={props.homePageText.homebrew}
              paths={props.paths}
            />
          </div>
        </Grid>
      </Grid>
      <Copyright
        copyright={props.homePageText.copyRight}
      />
    </main>
  )
}

export default withTransitions(HomePage, 'fade', true, 3000);