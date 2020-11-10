import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendIcon from "@material-ui/icons/Send";
import SubjectIcon from "@material-ui/icons/Subject";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory, useParams } from "react-router-dom";
import { StateContext } from "../Context/StateContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  container: {
    maxHeight: 440,
  },
  infoPaper: {
    padding: 30,
    textAlign: "center",
    height: "auto",
  },
  ticketPaper: {
    padding: 30,
    textAlign: "left",
    height: "auto",
  },
  typography: {
    fontSize: 18,
  },
  margin: {
    marginTop: 20,
  },
  button: {
    marginTop: 100,
    color: "white",
    backgroundColor: "#03363d",
    "&:hover": {
      backgroundColor: "#066c7a",
    },
  },
  skeletonPaper: {
    height: "auto",
  },
  skeletonText: {
    height: 100,
  },
});

function TicketInfoPage() {
  const classes = useStyles();
  let history = useHistory();
  const { id } = useParams();
  const { tickets } = useContext(StateContext);
  const tbc = "TBC";

  const SendButton = () => (
    <IconButton>
      <SendIcon />
    </IconButton>
  );

  function onClick() {
    history.push("/tickets");
  }

  if (Object.keys(tickets).length === 0) {
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={2}>
            <Paper className={classes.skeletonPaper}>
              <Skeleton variant="text" className={classes.skeletonText} />
              <Divider />
              <Skeleton variant="text" className={classes.skeletonText} />
              <Divider />
              <Skeleton variant="text" className={classes.skeletonText} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={10}>
            <Paper className={classes.skeletonPaper}>
              <Skeleton variant="text" className={classes.skeletonText} />
              <Divider />
              <Skeleton variant="text" className={classes.skeletonText} />
              <Divider />
              <Skeleton variant="text" className={classes.skeletonText} />
            </Paper>
          </Grid>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ArrowBackIcon />}
            onClick={onClick}
          >
            Back to my tickets
          </Button>
        </Grid>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={2}>
          <Paper className={classes.infoPaper}>
            <Typography variant="h6" color="primary" className={classes.margin}>
              <AccessTimeIcon /> Date created :{" "}
              {new Date(tickets[id - 1].created_at).toLocaleDateString("en-gb")}
            </Typography>
            <Divider />
            <TextField
              className={classes.margin}
              id="requester"
              label="Requester"
              value={tickets[id - 1].requester_id}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.margin}
              id="assignee"
              label="Select Assignee"
              value={tickets[id - 1].assignee_id}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="h6" color="primary" className={classes.margin}>
              <PriorityHighIcon /> Priority :{" "}
              {tickets[id - 1].priority ? (
                <TextField
                  id="select-priority"
                  select
                  value={tickets[id - 1].priority}
                  helperText="Change ticket priority"
                >
                  <MenuItem
                    key={tickets[id - 1].priority}
                    value={tickets[id - 1].priority}
                  >
                    {tickets[id - 1].priority}
                  </MenuItem>
                </TextField>
              ) : (
                <TextField
                  id="select-priority"
                  select
                  value={tbc}
                  helperText="Change ticket priority"
                >
                  <MenuItem key={tbc} value={tbc}>
                    {"TBC"}
                  </MenuItem>
                </TextField>
              )}
            </Typography>

            <Typography variant="h6" color="primary" className={classes.margin}>
              <EqualizerIcon /> Status :{" "}
              <TextField
                id="select-status"
                select
                value={tickets[id - 1].status}
                helperText="Change ticket status"
              >
                {tickets[id - 1].status ? (
                  <MenuItem
                    key={tickets[id - 1].status}
                    value={tickets[id - 1].status}
                  >
                    {tickets[id - 1].status}
                  </MenuItem>
                ) : (
                  <MenuItem key={tbc} value={tbc}>
                    {tbc}
                  </MenuItem>
                )}
              </TextField>
            </Typography>

            <Typography variant="h6" color="primary" className={classes.margin}>
              <MergeTypeIcon />
              Type :{" "}
              {tickets[id - 1].type ? (
                <TextField
                  id="select-type"
                  select
                  value={tickets[id - 1].type}
                  helperText="Change ticket priority"
                >
                  <MenuItem
                    key={tickets[id - 1].type}
                    value={tickets[id - 1].type}
                  >
                    {tickets[id - 1].type}
                  </MenuItem>
                </TextField>
              ) : (
                <TextField
                  id="select-type"
                  select
                  value={tbc}
                  helperText="Change ticket type"
                >
                  <MenuItem key={tbc} value={tbc}>
                    {"TBC"}
                  </MenuItem>
                </TextField>
              )}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={10}>
          <Paper className={classes.ticketPaper}>
            <Typography variant="h4" color="primary" gutterBottom="true">
              {" "}
              <SubjectIcon /> {tickets[id - 1].subject}{" "}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom="true"
              color="textSecondary"
            >
              Via {tickets[id - 1].via.channel}{" "}
            </Typography>
            <Divider />
            <Typography
              className={classes.typography}
              variant="h6"
              color="textPrimary"
            >
              {tickets[id - 1].description}
            </Typography>

            <TextField
              id="standard-full-width"
              multiline={true}
              rows={5}
              style={{ margin: 8, marginTop: 50 }}
              fullWidth
              margin="normal"
              InputProps={{ endAdornment: <SendButton /> }}
              label="Send message"
            />
          </Paper>
        </Grid>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<ArrowBackIcon />}
          onClick={onClick}
        >
          Back to my tickets
        </Button>
      </Grid>
    </div>
  );
}

export default TicketInfoPage;
