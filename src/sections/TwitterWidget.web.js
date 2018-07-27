import React, { Component } from 'react';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

//Twitter Widget
class TwitterWidget extends Component {
  render()
  {
    return(
      <TwitterTimelineEmbed
        sourceType="collection"
        id="1010648304001081344"
        options={{chrome: "noheader nofooter", width: '100vw'}}
      />
    )
  }
}

export default TwitterWidget;