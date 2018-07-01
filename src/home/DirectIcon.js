import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Images
import book from '../images/book_05g.png';

const DirectIcon = (props) => {
  return (
    <Grid
      item xs={4}
    >
      <Link to="/stories" className="link">
        <Paper>
          <IconButton>
            <img src={book} alt="Book" />
          </IconButton>
          <Typography variant="subheading">{props.directIconData.text}</Typography>
        </Paper>
      </Link>
    </Grid>
  )
}

export default DirectIcon;