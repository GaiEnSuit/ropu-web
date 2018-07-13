import React from 'react';

// Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

//HOC
import withLoader from '../../hoc/withLoader';

// Style OVerrides
import styles, { newsFeedHeight } from '../../styles';

const TwitterWidget = (props) => {
  return(
    <Paper
      className={props.classes.newsFeedContent}
    >
      <TwitterTimelineEmbed
        sourceType="collection"
        id="1010648304001081344"
        options={{chrome: "noheader nofooter", height: newsFeedHeight()}}
      />
    </Paper>
  )
}

export default withStyles(styles)(withLoader(TwitterWidget));