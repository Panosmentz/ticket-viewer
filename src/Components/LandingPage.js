import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Redirect } from "react-router-dom";
import { StateContext } from "../Context/StateContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#066c7a",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#066c7a",
    "&:hover": {
      backgroundColor: "#066c7a",
    },
  },
  textfield: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#066c7a",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#066c7a",
    },
  },
}));

function LandingPage() {
  const classes = useStyles();
  const { getTickets, isAuthenticated } = useContext(StateContext); //getTickets makes the API call, isAuthenticated is true only when the API call responds with 200 OK(user must be authenticated)
  const [formData, setFormData] = useState({ email: "", password: "" }); //set the current state of email and password
  const { email, password } = formData; //get email and password from formData to be passed on the getTickets function

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value }); //monitor state changes when keys are entered in the textfields

  const onSubmit = async (e) => {
    e.preventDefault();
    getTickets(email, password); //API call
  };
  if (isAuthenticated === true) {
    //true on action dispatch if API response status is 200
    return <Redirect to="/tickets" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Authenticate
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => onChange(e)}
            className={classes.textfield}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => onChange(e)}
            className={classes.textfield}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Authenticate
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LandingPage;
