import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Explore from "./components/Explore.js"
import BuildTeams from "./components/BuildTeams.js"
import ViewTeams from "./components/ViewTeams.js"
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [])
  
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Explore">
          <Explore />
        </Route>
        <Route exact path="/BuildTeams">
          <BuildTeams />
        </Route>
        <Route exact path="/ViewTeams">
          <ViewTeams />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
