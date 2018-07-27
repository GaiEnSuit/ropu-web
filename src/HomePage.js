import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

// Styles
import styles from './styles/styles';

// menus
import MainMenu from './menus/MainMenu';

// Modules
import NewsFeedHandler from './modules/NewsFeedHandler';

// Images
import banner from './images/brand_white_4x3.png';

const Banner = (props) => {
  return(
    <Image
      source={banner}
      resizeMode="contain"
      style={{flex:1, height: undefined, width: undefined}}
    />
  )
}

const Copyright = (props) => {
  return(
    <Text
      style={styles.colorRed}
    >
      {props.copyright}
    </Text>
  )
}

const StartButton = (props) => {
  return (
    <Text
      style={styles.colorRed}
      onClick={()=>{
        props.update({start: true});
        console.log("Game Started")
      }}
    >
      START
    </Text>
  )
}

const Version = (props) => {
  return (
    <Text
      style={styles.colorWhite}
    >
      {props.text.version} 0.3.00
    </Text>
  )
}

// Layout
class HomePage extends Component {
  
  componentWillMount () {
    this.props.update({start: false})
  }
  
  render () {
    return (
      <View
        style={[
          styles.flex1,
          styles.bgColorBlack,
          styles.overflowHidden,
          {flexDirection: this.props.orientation === "portrait"? "column":"row"}
        ]}
      >
        <View
          style={[
            styles.flex1,
            styles.dim100
          ]}
        >
          <Banner {...this.props} />
        </View>
        {!this.props.start &&
          <View
            style={[
              styles.flex1,
              styles.justifyCenter,
              styles.alignCenter,
              styles.dim100
            ]}
          >
            <StartButton
              {...this.props}
            />
          </View>
        }
        {this.props.start &&
          <View
            style={[
              styles.flex1,
              styles.justifyCenter,
              styles.alignCenter
            ]}
          >
            <MainMenu {...this.props} />
          </View>
        }
        <View
          style={styles.copyRight}
        >
          <Copyright
            copyright={this.props.text.copyRight}
          />
        </View>
        <View
          style={styles.version}
        >
          <Version {...this.props} />
        </View>
        {this.props.start &&
          <NewsFeedHandler {...this.props} />
        }
      </View>
    )
  }
}

export default HomePage;