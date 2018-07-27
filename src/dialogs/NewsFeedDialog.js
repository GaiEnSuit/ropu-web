import React from 'react';

// Material ui
import DialogContent from '@material-ui/core/DialogContent';

// headers
import RopuDialogTitleResponsive from '../headers/RopuDialogTitleResponsive';

// Style Classes
import styles from '../styles/styles';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

//HOC
import withLoader from '../hoc/withLoader';

//Twitter Widget
const TwitterWidget = (props) => {
  return(
    <TwitterTimelineEmbed
      sourceType="collection"
      id="1010648304001081344"
      options={{chrome: "noheader nofooter", width: '100vw'}}
    />
  )
}

// Twitter Widget with Loader
const TwitterWidgetWithLoader = withLoader(TwitterWidget);

// News Feed
const NewsFeedDialog = (props) => {
  return (
    <div
      style={[styles.displayFlex, ...styles.directionColumn]}
    >
      <RopuDialogTitleResponsive {...props} title={props.text.newsFeedDialogTitle} />
      <DialogContent
        style={[styles.displayFlex]}
      >
        <TwitterWidgetWithLoader
          offline={props.offline}
          {...props}
        />
      </DialogContent>
    </div>
  )
}

export default NewsFeedDialog;