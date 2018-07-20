import React from 'react';

// styles
import Typography from '@material-ui/core/Typography';
import styles from './styles/styles';

// Material-Ui
import Toolbar from '@material-ui/core/Toolbar';
// import Card from '@material-ui/core/Card';

// Button
import BackButton from './buttons/BackButton';

// HOC
import withDialog from './hoc/withDialog';

// Headers
import TitleBar from './headers/TitleBar';

const BackButtonWithDialog = withDialog(BackButton, 'homeDialog')

// Story List
// const StorySelectionList = (props) => {
//   console.log(props.gameListData)
//   return (
//     <div
//       style={{...styles.vp100}}
//     >
//       <Toolbar />
//         {props.gameListData.map((game, index) => {
//           return (
//             <Card
//               key={index}
//               style={{...styles.vp100}}
//             >
//               <Typography variant="display1" >{game.name}</Typography>
//             </Card>
//           )
//           })
//         }
//       <Toolbar />
//       <Toolbar />
//     </div>
//   )
// }

// Footer
const StorySelectionActionBar = (props) => {
  return(
    <Toolbar
      style={{...styles.bgColorTransparant, ...styles.actionBar, ...styles.displayFlex, ...styles.justifyBetween}}
    >
      <BackButtonWithDialog
        {...props}
      />
    </Toolbar>
  )
}

// Layout
const StorySelectionPage = (props) => {
  return (
    <main
      id="storySelection"
      style={{...styles.minHeight}}
    >
      <TitleBar {...props} />
      <div>
        <Toolbar />
        <Typography variant="display1">This Feature is Currently Unavailable</Typography>
        <Toolbar />
      </div>
      <StorySelectionActionBar {...props} />
    </main>
  )
}

export default StorySelectionPage;