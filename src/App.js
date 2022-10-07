import React, {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Explore from "./components/Explore.js"
import BuildTeams from "./components/BuildTeams.js"
import ViewTeams from "./components/ViewTeams.js"
import {PokemonContext, TeamSizeContext} from "./contexts/PokemonContext.js"
// import {TeamSizeContext} from "./contexts/TeamSizeContext.js"
import './App.css';

function App() {
  const [pokemonArr, setPokemonArr] = useState([])
  const [teamSize, setTeamSize] = useState(6)
  
  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => setPokemonArr(data))
  }, [])
  
  function handleSetSize(newSize) {
    setTeamSize(newSize)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home handleSetSize={handleSetSize}/>
        </Route>
      <PokemonContext.Provider value={{pokemonArr}}>
        <Route exact path="/Explore">
          <Explore />
        </Route>
          <TeamSizeContext.Provider value={{teamSize}}>
            <Route exact path="/BuildTeams">
              <BuildTeams />
            </Route>
          </TeamSizeContext.Provider>
        <Route exact path="/ViewTeams">
          <ViewTeams />
        </Route>
      </PokemonContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
