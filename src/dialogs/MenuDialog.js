import React from 'react';

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

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';

const MenuDialog = (props) => {
  return (
    <Dialog
      open={props.menuDialog}
      onClose={()=>{
        props.updateDialog(false, "menuDialog")
      }}
      aria-labelledby="dynamic dialog"
      fullScreen
    >
      <DialogActions>
        <IconButton
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false, "menuDialog")
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogTitle>
        {props.menuDialogText.title}
      </DialogTitle>
      <DialogContent>
        <List>
          {/* Home Link */}
          <ListItem
            onClick={window.location.href === props.domain? null : ()=>{props.updateDialog(true, "homeDialog")}}
          >
            <HomeIcon />
            <Typography variant="display1">{props.menuDialogText.home.text}</Typography>
          </ListItem>
          {/* Market Link */}
          <ListItem
            onClick={()=>{
             props.updateDialog(true, "marketDialog")
            }}
          >
            <ShopIcon />
            <Typography variant="display1">{props.menuDialogText.market.text}</Typography>
          </ListItem>
          {/* Guide Link */}
          <ListItem
            onClick={()=>{
             props.updateDialog(true, "guideDialog")
            }}
          >
            <HelpIcon />
            <Typography variant="display1">{props.menuDialogText.guide.text}</Typography>
          </ListItem>
          {/* Account Links */}
          {
            props.loggedIn? (
              <div>
                <ListItem 
                  onClick={()=>{
                    props.updateDialog(true, "accountDialog")
                  }}
                >
                  <AccountBoxIcon />
                  <Typography variant="display1">{props.menuDialogText.account.text}</Typography>
                </ListItem>
                <ListItem
                  onClick={()=>{
                    props.updateDialog(false, 'menuDialog')
                  }}
                >
                  <ExitToAppIcon />
                  <Typography variant="display1">{props.menuDialogText.account.logout}</Typography>
                </ListItem>
              </div>
            ) : (
              <ListItem
                onClick={()=>{
                  props.updateDialog(true, "logInDialog")
                }}
              >
                <InputIcon />
                <Typography variant="display1">{props.menuDialogText.account.login}</Typography>
              </ListItem>
            )
          }
        </List>
      </DialogContent>
    </Dialog>
  )
}

export default withDialogControl(MenuDialog);