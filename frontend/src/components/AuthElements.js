import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';

const AuthElements = function(props){
   const logInButton=()=> {
        if (props.user) return(
    [<Avatar key='auth-album-element' src={props.user.providerData[0].photoURL} />, 
    <IconButton key='auth-sign-out-button'color= "inherit" onClick={props.logout}><ExitToApp /></IconButton>]
         );
    
        return (
          <Button variant="contained" onClick={props.login}>
            inciar sesion
          </Button>
        );
      }
    
       return( 
       <div className={props.classes.container}>
            {logInButton()}
       </div>
      );
    }

    export default withStyles({
        container:{
            display: 'flex',
            flexDirection: 'row'
        }
    }) (AuthElements);