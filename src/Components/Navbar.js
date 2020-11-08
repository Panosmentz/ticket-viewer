import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

 function Navbar() {
    let history = useHistory();
  const classes = useStyles();

  function handleOnClick(){
    history.push("/");
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            edge="start"
            onClick={handleOnClick}
            color="inherit"
            aria-label="menu"
            >
                <ViewWeekIcon />
            </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ticket Viewer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;