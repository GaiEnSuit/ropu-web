import React from 'react';

import { View, Text } from 'react-native';

// styles
import styles from '../styles/styles';

// import Card from '@material-ui/core/Card';

// Button
import BackButton from '../buttons/BackButton';

// HOC
import withNavigation from '../hoc/withNavigation';

// Headers
import TitleBar from '../headers/TitleBar';

const EnhancedBackButton = withNavigation(BackButton, '/');

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
    <View
      style={[
        styles.bgColorTransparant,
        styles.actionBar,
        styles.directionRow,
        styles.justifyBetween,
        styles.positionFixed,
        styles.width100,
        styles.positionBottom
      ]}
    >
      <EnhancedBackButton
        {...props}
      />
    </View>
  )
}

// Layout
const StorySelectionPage = (props) => {
  return (
    <View
      style={styles.minHeight}
    >
      <TitleBar {...props} />
      <View>
        <Text>This Feature is Currently Unavailable</Text>
      </View>
      <StorySelectionActionBar {...props} />
    </View>
  )
}

export default StorySelectionPage;
