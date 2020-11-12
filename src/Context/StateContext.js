import React, { createContext, useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import StateReducer from "./StateReducer";

//initial state of the App passed to useReducer
const initialState = {
  tickets: {},
  isAuthenticated: false,
};

export const StateContext = createContext(initialState); //create StateContext

//create StateProvider. All App components(children) need to be wrapped around StateProvider to have access to StateContext
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, initialState);

  // API Call, email and password get passed from LandingPage.js TextFields
  // https://serene-gorge-83773.herokuapp.com/ bypass CORS
  async function getTickets(email, password) {
    try {
      const res = await axios({
        url:
          "https://serene-gorge-83773.herokuapp.com/https://pmentzdev.zendesk.com/api/v2/tickets.json",
        method: "get",
        headers: { "Content-Type": "application/json" },
        auth: {
          username: email,
          password: password,
        },
      });
      dispatch({
        //action dispatch to StateReducer.js
        type: "SET_TICKETS",
        payload: res.data.tickets,
      });
      if (res.status === 200) {
        //API has returned tickets.json successfully
        toast.success("You have succesfuly been authenticated", {
          //renders a succes Toast on succesfull API call
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
      //Error handling
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          toast.error("Wrong username or password, please try again", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else if (err.response.status === 204) {
          toast.error("No content was found for this request", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else if (err.response.status === 403) {
          toast.error(
            "You have no permissions to use this API, please contact your Administrator",
            {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            }
          );
        } else if (err.response.status === 409) {
          toast.error(
            "There has been a conflict with this API call, please try again later",
            {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            }
          );
        } else if (err.response.status === 422) {
          toast.error("This request cannot be processed by the server", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else if (err.response.status === 429) {
          toast.error("API Usage Limit has been exceeded", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else if (err.response.status === 503) {
          toast.error("Server unavailable. Please try again later", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      }
    }
  }

  return (
    //Values that can be accessed from all Children components
    <StateContext.Provider
      value={{
        tickets: state.tickets,
        isAuthenticated: state.isAuthenticated,
        getTickets,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
