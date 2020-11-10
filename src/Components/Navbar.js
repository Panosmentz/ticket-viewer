import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#03363d",
  },
  title: {
    flexGrow: 1,
  },
});

function Navbar() {
  const classes = useStyles();
  let history = useHistory();

  function onClick() {
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={onClick}
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
