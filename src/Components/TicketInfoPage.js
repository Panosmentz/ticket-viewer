import React, {useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import {StateContext} from "../Context/StateContext";
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import SubjectIcon from '@material-ui/icons/Subject';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import MergeTypeIcon from '@material-ui/icons/MergeType';


const useStyles = makeStyles({
    root: {
      width: '100%',
      height: "100%",
    },
    container: {
      maxHeight: 440,
    },
    paper:{
        padding: "30px",
        textAlign: "left",
    },
    typography:{
        fontSize:18,
    },
    margin:{
        marginTop:20,
    }
  });


function TicketInfoPage() {

    const classes = useStyles();
    const {tickets}= useContext(StateContext);
    
    const { id } = useParams();
    useEffect(()=>{
        console.log(id);
        console.log(tickets[id-1].priority);
    })

    
  const SendButton = () => (
    <IconButton>
        <SendIcon />
    </IconButton>
)


    return (
        <div className={classes.root}>
            <Grid container  spacing={0} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} md={3} >
                <Paper className={classes.paper} > 
                <TextField
                    className={classes.margin}
                    id="requester"
                    label="Requester"
                    value={tickets[id-1].requester_id}
                    disabled="true"
                    InputProps={{
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
                    value={tickets[id-1].assignee_id}
                    disabled="true"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                {tickets[id-1].priority ? (
                    <Typography variant="h6" color="primary" className={classes.margin}><PriorityHighIcon  /> Priority : {tickets[id-1].priority}</Typography>
                ) : (
                    <Typography variant="h6" color="primary" className={classes.margin}><PriorityHighIcon  /> Priority : TBC</Typography>
                )
                }
                <Divider />
                {tickets[id-1].status ? (
                    <Typography variant="h6" color="primary" className={classes.margin}><EqualizerIcon  /> Status : {tickets[id-1].status}</Typography>
                ) : (
                    <Typography variant="h6" color="primary" className={classes.margin}><EqualizerIcon  />Status : TBC</Typography>
                )
                }
           
                <Divider />
                <Typography variant="h6" color="primary" className={classes.margin}><AccessTimeIcon  /> Date created : {new Date(tickets[id-1].created_at).toLocaleDateString("en-gb")}</Typography>
                <Divider />
                {tickets[id-1].type ? (
                    <Typography variant="h6" color="primary" className={classes.margin}><MergeTypeIcon  />Type : {tickets[id-1].type}</Typography>
                ) : (
                    <Typography variant="h6"  color="primary" className={classes.margin}><MergeTypeIcon  />Type : TBC</Typography>
                )
                }
                </Paper>
                </Grid>
                <Grid item xs={12} md={9} >
                <Paper className={classes.paper} >
                    <Typography variant="h4" color="primary" gutterBottom="true"> <SubjectIcon  /> {tickets[id-1].subject} </Typography>
                    <Typography variant="subtitle2" gutterBottom="true" color="textSecondary">Via {tickets[id-1].via.channel} </Typography>
                    <Divider />
                    <Typography className={classes.typography} variant="h6" color="textPrimary">{tickets[id-1].description}</Typography>
                    
                    <TextField
                        id="standard-full-width"
                        multiline={true}
                        rows={5}
                        style={{ margin: 8, marginTop:50}}
                        fullWidth
                        margin="normal"
                        InputProps={{endAdornment: <SendButton />}}
                        label="Send message"
                    /> 
                    
                    </Paper>
                </Grid>
                </Grid>
 </div>
    )
}

export default TicketInfoPage


//tickets[id-1].subject
//tickets[id-1].via.channel -> under subject
//tickets[id-1].created_at
//tickets[id-1].type  -> above subject
//tickets[id-1].description
//tickets[id-1].priority
//tickets[id-1].status
//tickets[id-1].