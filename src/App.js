import './App.css';
import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage"
import TicketsPage from "./Components/TicketsPage"
import TicketInfoPage from "./Components/TicketInfoPage"
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {StateProvider} from "./Context/StateContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <StateProvider>
    <ToastContainer />
    <Router>
    <Navbar />
      <Switch>
        <Route  exact path="/" component={LandingPage} />
        <Route exact path="/tickets" component={TicketsPage} />
        <Route path="/tickets/:id" component={TicketInfoPage} />
      </Switch>
    </Router>
    </StateProvider>
  )
}



export default App;
