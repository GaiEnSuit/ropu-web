import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';

class MenuDialog extends Component {
  render() {
    return (
      <Dialog
        open={this.props.menuDialog}
        aria-labelledby="dynamic dialog"
        fullScreen
      >
        <DialogActions>
          <IconButton aria-label="Close" color="primary">
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>
          {this.props.menuLinks.home.text.toUpperCase()}
        </DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <Link to={this.props.menuLinks.home.url}>
                <Button>
                  <Typography variant="display1">{this.props.menuLinks.home.text}</Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button>
                <Typography variant="display1">{this.props.menuLinks.guide.text}</Typography>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <Link to={this.props.menuLinks.market.url}>
                  <Typography variant="display1">{this.props.menuLinks.market.text}</Typography>
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <Typography variant="display1">{this.props.menuLinks.account.text}</Typography>
              </Button>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    )
  }
}

export default MenuDialog;