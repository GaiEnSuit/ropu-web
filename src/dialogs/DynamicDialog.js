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
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class DynamicDialog extends Component {
  
  state = {
    open: false,
    data: this.props.data
  }
  
  render() {
    
    console.log(this.props.dynamicDialog);
    
    return (
      <Dialog
        open={this.props.dynamicDialog.open}
        onClose={this.props.toggleDialog('', false)}
        aria-labelledby="dynamic dialog"
        fullScreen
      >
        {this.props.dynamicDialog.data === "menu" &&
          <div>
            <DialogActions>
              <IconButton aria-label="Close" color="primary" onClick={this.props.toggleDialog('', false)}>
                <CloseIcon />
              </IconButton>
            </DialogActions>
            <DialogTitle>
              {this.props.dynamicDialog.data.toUpperCase()}
            </DialogTitle>
            <DialogContent>
              <List>
                <ListItem>
                  <Link to={this.props.menuLinks.home.url} onClick={this.props.toggleDialog('', false)}>
                    <Button>
                      <Typography variant="display1">{this.props.menuLinks.home.text}</Typography>
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Button onClick={this.props.toggleDialog('guide', true)}>
                    <Typography variant="display1">{this.props.menuLinks.guide.text}</Typography>
                  </Button>
                </ListItem>
                <ListItem>
                  <Button>
                    <Link to={this.props.menuLinks.market.url} onClick={this.props.toggleDialog('', false)}>
                      <Typography variant="display1">{this.props.menuLinks.market.text}</Typography>
                    </Link>
                  </Button>
                </ListItem>
                <ListItem>
                  <Button onClick={this.props.toggleDialog('account', true)}>
                    <Typography variant="display1">{this.props.menuLinks.account.text}</Typography>
                  </Button>
                </ListItem>
              </List>
            </DialogContent>
          </div>
        }
        {this.props.dynamicDialog.data === 'guide' &&
          <div>
            <DialogActions>
              <IconButton aria-label="Close" color="primary" onClick={this.props.toggleDialog('', false)}>
                <CloseIcon />
              </IconButton>
            </DialogActions>
          </div>
        }
      </Dialog>
    )
  }
}

export default DynamicDialog;