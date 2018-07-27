import React, { Component } from 'react';

import WebView from 'react-native';

//Twitter Widget
class TwitterWidget extends Component {
  render()
  {
    let JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';

    let source = JS + '<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">8 TED Talks to inspire projects with kids: <a href="https://twitter.com/TEDTalks/status/758116657638309896">https://twitter.com/TEDTalks/status/758116657638309896</a> <a href="https://twitter.com/TEDTalks/status/758116657638309896">pic.twitter.com/HMmYAeP7Km</a></p>&mdash; TED Talks (@TEDTalks) <a href="https://twitter.com/TEDTalks/status/758116657638309896">27 de julio de 2016</a></blockquote>';

    return (
      <WebView
        source={{html: source}}
        javaScriptEnabled={true}
      />
    );
  }
}

export default TwitterWidget;