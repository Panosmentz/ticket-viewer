import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import TicketsPage from "./Components/TicketsPage";
import TicketInfoPage from "./Components/TicketInfoPage";
import { StateProvider } from "./Context/StateContext";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <StateProvider>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/tickets" component={TicketsPage} />
          <Route exact path="/tickets/:id" component={TicketInfoPage} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
