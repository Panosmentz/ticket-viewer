import React, {createContext, useEffect, useState, useReducer } from "react";
import StateReducer from "./StateReducer";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import {useHistory} from "react-router-dom";
const initialState = {
    tickets: {},
    isAuthenticated: false
}

export const StateContext = createContext(initialState);

export const StateProvider = ({children}) => {
    const history=useHistory();
    const [state, dispatch]= useReducer( StateReducer, initialState);

    async function getTickets(email,password) {
        try{
            const res = await axios({
                url: "https://cors-anywhere.herokuapp.com/https://pmentzdev.zendesk.com/api/v2/tickets.json",
                method: "get",
                headers: {"Content-Type": "application/json" },
                auth: {
                   username: email,
                   password: password
                }
            })
            dispatch({
                type:"SET_TICKETS",
                payload: res.data.tickets
            })
 //           console.log(res)
  //          console.log(res.data);
   //         console.log(res.data.tickets)
 //           if (res.status === 200){
 //               console.log(res.status);
 //              return <Redirect to="/tickets" />;
   //         }
        } catch (err) {
            if (err.response) {
                console.log("This is the error status bruv", err.response.status);
                if (err.response.status === 401){
                    console.log("Wrong creds, try again");
                }
            }
        }
        
    }

    async function loadTickets() {
        const email= process.env.REACT_APP_EMAIL;
        const password= process.env.REACT_APP_TOKEN;
        try{
            const res = await axios({
                url: "https://cors-anywhere.herokuapp.com/https://pmentzdev.zendesk.com/api/v2/tickets.json",
                method: "get",
                headers: {"Content-Type": "application/json" },
                auth: {
                   username: email,
                   password: password
                }
            })
            dispatch({
                type:"LOAD_TICKETS",
                payload: res.data.tickets
            })
            
        } catch (err) {
            if (err.response) {
                console.log("This is the error status bruv", err.response.status);
                if (err.response.status === 401){
                    console.log("Wrong creds, try again");
                }
            }
        }
        
    }

    useEffect(() => {
        loadTickets();
      }, []);

    return (
        <StateContext.Provider
          value={{
            tickets: state.tickets,
            isAuthenticated: state.isAuthenticated,
            getTickets
          }}
        >
          {children}
        </StateContext.Provider>
      );
    };