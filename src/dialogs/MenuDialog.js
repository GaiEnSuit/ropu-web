import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
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
          <IconButton aria-label="Close" color="primary" onClick={() => this.props.update({menuDialog: false})}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>
          {this.props.menuDialogTitle}
        </DialogTitle>
        <DialogContent>
          <List>
            {/* Home Link */}
            <ListItem>
              <Button 
                onClick={() => {
                  this.props.update({menuDialog: false});
                  this.props.update({homeDialog: true});
                }}
                disabled={window.location.href === this.props.domain? true : false}
              >
                <Typography variant="display1">{this.props.menuDialogData.home.text}</Typography>
              </Button>
            </ListItem>
            {/* Guide Link */}
            <ListItem>
              <Button 
                onClick={() => this.props.update({guideDialog: true})}>
                <Typography variant="display1">{this.props.menuDialogData.guide.text}</Typography>
              </Button>
            </ListItem>
            {/* Market Link */}
            <ListItem>
              <Button onClick={() => this.props.update({menuDialog: false})}>
                <Link to={this.props.menuDialogData.market.url} className='link'>
                  <Typography variant="display1">{this.props.menuDialogData.market.text}</Typography>
                </Link>
              </Button>
            </ListItem>
            {/* Account Link */}
            <ListItem>
              {
                this.props.loggedIn? (
                  <div>
                    <Button onClick={() => this.props.update({logInDialog: true})}>
                      <Typography variant="display1">{this.props.menuDialogData.account.text}</Typography>
                    </Button>
                    <Button onClick={() => this.props.update({menuDialog: false})}>
                      <Typography variant="display1">{this.props.menuDialogData.account.logout}</Typography>
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => this.props.update({logInDialog: true})}>
                    <Typography variant="display1">{this.props.menuDialogData.account.text}</Typography>
                  </Button>
                )
              }
              
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    )
  }
}

export default MenuDialog;