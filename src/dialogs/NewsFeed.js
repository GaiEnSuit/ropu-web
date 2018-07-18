import React from 'react';

// Material-UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Style Classes
import styles, { newsFeedHeight } from './styles/styles';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

//HOC
import withLoader from './hoc/withLoader';

//Twitter Widget
const TwitterWidget = (props) => {
  return(
    <Paper
      style={styles.newsFeedContent}
    >
      <TwitterTimelineEmbed
        sourceType="collection"
        id="1010648304001081344"
        options={{chrome: "noheader nofooter", height: newsFeedHeight()}}
      />
    </Paper>
  )
}

// Twitter Widget with Loader
const TwitterWidgetWithLoader = withLoader(TwitterWidget);

// News Feed
const NewsFeed = (props) => {
  return (
    <div>
      <Paper>
        <Typography
          style={styles.title}
          variant="display1"
        >
          {props.homePageText.newsFeed}
        </Typography>
        <TwitterWidgetWithLoader homePageText={props.homePageText} {...props}/>
      </Paper>
    </div>
  )
}

export default NewsFeed;