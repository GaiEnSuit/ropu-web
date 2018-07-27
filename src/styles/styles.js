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
// Overflow
  overflowScroll: {
    overflow: 'scroll'
  },
// Sizing
  responsiveImage: {
    width: '100%',
    height: 'auto'
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
  // Shape
  shapeCircle: {
    borderRadius: '50%'
  },
  // Component Specific
  version: {
    position: 'fixed',
    top: '5px',
    left: '5px'
  },
  copyRight: {
    position: 'fixed',
    bottom: '5px',
    left: '50%'
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