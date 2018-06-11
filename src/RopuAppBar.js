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
    
    let drawerList = this.props.navLinks.map((navLink, index) => {
      return <ListItem key={index}><Typography variant="subheading"><Link to={navLink.url}>{navLink.text}</Link></Typography></ListItem>
    });
    
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton color="inherit" onClick={this.toggleDrawer(this.props.ropuappbar, true)} aria-label="Menu" >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography variant="title" color="inherit">{this.props.title}</Typography>
          </Link>
          { !this.props.ropuappbar.loggedIn &&
            <Button disabled variant="raised">Login</Button>
          }
          { this.props.ropuappbar.loggedIn &&
            <IconButton>
              <AccountCircle />
            </IconButton>
          }
        </Toolbar>
        <Drawer open={this.props.ropuappbar.open} onClose={this.toggleDrawer(this.props.ropuappbar, false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(this.props.ropuappbar, false)}
            onKeyDown={this.toggleDrawer(this.props.ropuappbar, false)}
          >
          <List disablePadding>{drawerList}</List>
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default RopuAppBar;