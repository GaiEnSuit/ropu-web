import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

// Styles
import styles from './styles/styles';

// menus
import MainMenu from './menus/MainMenu';

// Modules
import NewsFeedHandler from './modules/NewsFeedHandler';

const Title = (props) => {
  return(
    <Image
      source={require("./images/brand_white_4x3.png")}
      resizeMode="contain"
      style={styles.responsiveImage}
    />
  )
}

const Copyright = (props) => {
  return(
    <Text
      style={[
        styles.colorWhite
      ]}
    >
      {props.copyright}
    </Text>
  )
}

const StartButton = (props) => {
  return (
    <Text
      style={[
        styles.colorWhite
      ]}
    >
      TOUCH TO START
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
          {flexDirection: this.props.orientation === "portrait"? "column":"row"}
        ]}
      >
        <View
          style={this.props.orientation === "portrait"? styles.flex1 : styles.flex2}
        >
          <Title {...this.props} />
        </View>
        {!this.props.start &&
          <View
            style={[
              styles.flex1,
              styles.justifyCenter,
              styles.alignCenter,
              styles.dim100
            ]}
            onClick={()=>{
              this.props.update({start: true}, console.log("Game Started"));
            }}
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
