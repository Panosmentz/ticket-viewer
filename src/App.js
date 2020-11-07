import './App.css';
import LandingPage from "./Components/LandingPage"
import TicketsPage from "./Components/TicketsPage"
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {StateProvider} from "./Context/StateContext";

function App() {
  return (
    <StateProvider>
    <div>
    <Router>
      <Switch>
        <Route  exact path="/" component={LandingPage} />
        <Route exact path="/tickets" component={TicketsPage} />
      </Switch>
    </Router>
    </div>
    </StateProvider>
  )
}



export default App;
