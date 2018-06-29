import React, { Component } from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Shop';
import InputIcon from '@material-ui/icons/Input';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
            <ListItem
              onClick={window.location.href === this.props.domain? null : (() => {
                        this.props.update({menuDialog: false});
                        this.props.update({homeDialog: true});
                      })
              }
            >
              <HomeIcon />
              <Typography variant="display1">{this.props.menuDialogData.home.text}</Typography>
            </ListItem>
            {/* Market Link */}
            <ListItem onClick={() => this.props.update({marketDialog: true})}>
              <ShopIcon />
              <Typography variant="display1">{this.props.menuDialogData.market.text}</Typography>
            </ListItem>
            {/* Guide Link */}
            <ListItem onClick={() => this.props.update({guideDialog: true})}>
              <HelpIcon />
              <Typography variant="display1">{this.props.menuDialogData.guide.text}</Typography>
            </ListItem>
            {/* Account Links */}
            {
              this.props.loggedIn? (
                <div>
                  <ListItem 
                    onClick={() => {
                      this.props.update({accountDialog: true})
                    }}
                  >
                    <AccountBoxIcon />
                    <Typography variant="display1">{this.props.menuDialogData.account.text}</Typography>
                  </ListItem>
                  <ListItem onClick={() => this.props.update({menuDialog: false})}>
                    <ExitToAppIcon />
                    <Typography variant="display1">{this.props.menuDialogData.account.logout}</Typography>
                  </ListItem>
                </div>
              ) : (
                <ListItem onClick={() => this.props.update({logInDialog: true})}>
                  <InputIcon />
                  <Typography variant="display1">{this.props.menuDialogData.account.login}</Typography>
                </ListItem>
              )
            }
          </List>
        </DialogContent>
      </Dialog>
    )
  }
}

export default MenuDialog;