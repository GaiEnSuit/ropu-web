import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from  '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';


class RopuAppBar extends Component {
  
  //Toggle Drawer
  toggleDrawer = (currentState, value) => () => {
    let newState = {open: value};
    this.update(currentState, newState);
  }
  
  //Update App State
  update = (currentState, newState) => {
    this.props.update({
      ropuappbar: Object.assign({}, currentState, newState)
    });
  }
  
  render() {
    const state = this.props.data;
    
    let drawerList = this.props.navLinks.map((navLink, index) => {
      return <ListItem key={index}><Link exact to={navLink.url}>{navLink.text}</Link></ListItem>
    });
    
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton color="inherit" onClick={this.toggleDrawer(state, true)} aria-label="Menu" >
            <MenuIcon />
          </IconButton>
          <Link exact to="/home">
            <Typography variant="title" color="inherit">{this.props.title}</Typography>
          </Link>
          { !state.loggedIn &&
            <Button disabled variant="raised">Login</Button>
          }
          { state.loggedIn &&
            <IconButton>
              <AccountCircle />
            </IconButton>
          }
        </Toolbar>
        <Drawer open={state.open} onClose={this.toggleDrawer(state, false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(state, false)}
            onKeyDown={this.toggleDrawer(state, false)}
          >
          <List disablePadding>{drawerList}</List>
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default RopuAppBar;