import React, {useState, useContext} from "react"
import {useHistory} from "react-router-dom"
import TeamDisp from "./TeamDisp"
import PokeBall from "../pokeballSprite.png"
import {TeamSizeContext} from "../contexts/PokemonContext.js"

function BuildTeams() {
    const [teamName, setTeamName] = useState('')
    const {teamSize} = useContext(TeamSizeContext)
    let history = useHistory()
    
    function handleNewName(e) {
        setTeamName(e.target.value)
    }
    function handleSaveTeam(newTeamArr) {
        if (
            // checks to make sure all slots are filled by actual pokemon and not placeholders
            (newTeamArr.filter(pokemon => typeof pokemon.id !== 'string').length == teamSize) &&
            // checks to make sure a name has been entered, name cannot be blank
            (teamName.length >= 1)
        ) {
            const newPokeObj = {
                "name": teamName,
                "pokemon": newTeamArr
            }
            fetch('http://localhost:3000/teams', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPokeObj)
            })
            .then(r => r.json())
            .then(() => history.push("/ViewTeams"))
        } 
    }
    // creates template for blank team with all 10 spots
    const templateBlankTeam = [
        {"id": 'a', "name": "Choose your first Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'b', "name": "Choose your second Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'c', "name": "Choose your third Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'd', "name": "Choose your fourth Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'e', "name": "Choose your fifth Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'f', "name": "Choose your sixth Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'g', "name": "Choose your seventh Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'h', "name": "Choose your eighth Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'i', "name": "Choose your ninth Pokemon", "sprites": {"front": PokeBall}},
        {"id": 'j', "name": "Choose your tenth Pokemon", "sprites": {"front": PokeBall}}
    ]
    // sets blankTeam to match teamSize, pass to TeamDisp component
    const blankTeam = templateBlankTeam.slice(0, teamSize)
    
    return (
        <div>
            <h1>Build a new team here</h1>
            <label>
                <h3>Name: </h3>
                <input className="newName" onChange={handleNewName}/>
            </label>
            <TeamDisp 
            teamArr={blankTeam}
            saveEdits={handleSaveTeam}
            />
        </div>
    )
}


export default BuildTeams