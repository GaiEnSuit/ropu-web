// Images
import spinner from '../images/spinner-loop.gif';

const styles = {
// Colors
  colorRed: {
    color: 'rgb(255,92,92)'
  },
  bgColorRed: {
    backgroundColor: 'rgb(255,92,92)'
  },
  bgColorTransparentRed: {
    backgroundColor: 'rgba(255,92,92,.8)'
  },
  colorMediumRed: {
    color: 'rgba(230,0,0)'
  },
  bgColorMediumRed: {
    backgroundColor: 'rgb(230,0,0)'
  },
  bgColorTransparentMediumRed: {
    backgroundColor: 'rgba(230,0,0,.8)'
  },
  bgColorDarkRed: {
    backgroundColor: 'rgb(131,0,0)'
  },
  bgColorTransparentDarkRed: {
    backgroundColor: 'rgba(131,0,0,.8)'
  },
  bgColorBlack: {
    backgroundColor: 'black'
  },
  bgColorTransparentBlack: {
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  bgColorTransparent: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  colorWhite: {
    color: 'white'
  },
  bgColorWhite: {
    backgroundColor: 'white'
  },
// Margin and Padding
  margin0: {
    margin: '0'
  },
  marginRA: {
    marginRight: 'auto'
  },
  marginLA: {
    marginLeft: 'auto'
  },
  padding0: {
    padding: '0'
  },
// Positioning
  positionBottom: {
    bottom: '0px'
  },
  positionFixed: {
    position: 'fixed'
  },
  positionAbsolute: {
    position: 'absolute'
  },
  absoluteTopRight: {
    position: 'absolute',
    top: '0px',
    right: '0px'
  },
  absoluteBottomRight: {
    position: 'absolute',
    bottom: '0px',
    right: '0px'
  },
  positionTop: {
    top: '0px'
  },
  displayFlex: {
    display: 'flex'
  },
  directionColumn: {
    flexDirection: 'column'
  },
  directionRow: {
    flexDirection: 'row'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyAround: {
    justifyContent: 'space-around'
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-start'
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
// Overflow
  overflowScroll: {
    overflow: 'scroll'
  },
// Sizing
  responsiveImage: {
    flex:1,
    height: undefined,
    width: undefined
  },
  width100: {
    width: '100%'
  },
  height100: {
    height: '100%'
  },
  minHeight: {
    minHeight: '100vh'
  },
  vw100: {
    width: '100vw'
  },
  vh100: {
    height: '100vh'
  },
  icon64: {
    width: '64px',
    height: '64px'
  },
  icon48: {
    width: '48px',
    height: '48px'
  },
  icon36: {
    width: '36px',
    height: '36px'
  },
  icon24: {
    width: '24px',
    height: '24px'
  },
  vp100: {
    width: '100vw',
    height: '100vh'
  },
  dim100: {
    width: '100%',
    height: '100%'
  },
  // Typography
  textCenter: {
    textAlign: 'center'
  },
  h1: {
    fontFamily: 'roboto',
    fontWeight: 'lighter',
    fontSize: 96,
    letterSpacing: -1.5
  },
  h2: {
    fontFamily: 'roboto',
    fontWeight: 'lighter',
    fontSize: 60,
    letterSpacing: -0.5
  },
  h3: {
    fontFamily: 'roboto',
    fontSize: 48,
    letterSpacing: 0
  },
  h4: {
    fontFamily: 'roboto',
    fontSize: 34,
    letterSpacing: 0.25
  },
  h5: {
    fontFamily: 'roboto',
    fontSize: 24,
    letterSpacing: 0
  },
  h6: {
    fontFamily: 'roboto',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.15
  },
  subtitle1: {
    fontFamily: 'roboto',
    fontSize: 16,
    letterSpacing: 0.15
  },
  subtitle2: {
    fontFamily: 'roboto',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.1
  },
  body1: {
    fontFamily: 'roboto',
    fontSize: 16,
    letterSpacing: 0.5
  },
  body2: {
    fontFamily: 'roboto',
    fontSize: 14,
    letterSpacing: 0.25
  },
  button: {
    fontFamily: 'roboto',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 0.75
  },
  caption: {
    fontFamily: 'roboto',
    fontSize: 12,
    letterSpacing: 0.4
  },
  overline: {
    fontFamily: 'roboto',
    fontWeight: 'bold',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5
  },
  // Shape
  shapeCircle: {
    borderRadius: '50%'
  },
  spinnerBackground: {
    backgroundColor: '#ffffff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: 'url(' + spinner + ')',
  },
  fab: {
    position: 'fixed',
    bottom: '35px',
    left: '50%',
    color: 'white',
    backgroundColor: 'rgb(255,92,92)'
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  appBarOffset: {
    paddingTop: '40.8px'
  },
  carouselContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  carouselItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto'
  },
  ropuDialogTitle: {
    paddingLeft: '16px'
  }
};

export default styles;
