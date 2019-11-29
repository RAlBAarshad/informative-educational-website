import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HiddenPotentials from './components/HiddenPotentials';
import Footer from "./components/Footer"
import BetterFuture from "./components/BetterFuture";
import OutComeOfBetterFuture from "./components/OutComeOfBetterFuture"


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={MainSection} />
          <Route path='/BetterFuture' component={BetterFuture} />
          <Route path='/HiddenPotentials' component={HiddenPotentials} />
          <Route path='/OutComeOfBetterFuture' component={OutComeOfBetterFuture} /> 
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
