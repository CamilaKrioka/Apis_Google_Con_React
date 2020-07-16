import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Login from '../container/Login';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar position='static' >
          <Toolbar className={this.props.classes.nav}>
              <Typography variant="h6" component="h1" className={this.props.classes.grow}>
                  Mi portfolio
              </Typography>
              <Login />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles({
    grow: {flexGrow:1},
    nav:{
        color: 'white',
        textAlign: 'left'
    }
    
})(AppNav);