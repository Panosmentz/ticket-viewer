import React, {useState, useContext} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {StateContext} from "../Context/StateContext"


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(20),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function LandingPage() {
    
 //async function getTickets() {
 //    try{
 //        const res = await axios({
 //            url: "https://cors-anywhere.herokuapp.com/https://pmentzdev.zendesk.com/api/v2/tickets.json",
 //            method: "get",
 //            headers: {"Content-Type": "application/json" },
 //            auth: {
 //               username: email,
 //               password: password
 //            }
 //        })
 //        console.log(res)
 //        console.log(res.data);
 //        console.log(res.data.tickets[0])
 //        if (res.status === 200){
 //           console.log("Should be redirected")
 //           history.push("/tickets");
 //          
 //      }
 //    } catch (err) {
 //        if (err.response) {
 //            console.log("This is the error status bruv", err.response.status);
 //            if (err.response.status === 401){
 //                console.log("Wrong creds, try again");
 //            }
 //        }
 //    }
 //    
 //}

    const {getTickets, isAuthenticated} = useContext(StateContext);
    const classes = useStyles();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        //redirect to /tickets and make the get tickets request
        getTickets(email,password);
        
      };
     if (isAuthenticated === true) {
       console.log(
         "This is state context is auth ",
         
         isAuthenticated
       );
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
        <form className={classes.form} noValidate onSubmit={onSubmit}>
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
            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Authenticate
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LandingPage;