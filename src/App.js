import React, {useState, useEffect} from "react"
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [])
  
  
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
