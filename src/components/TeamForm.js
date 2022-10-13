import React, {useState, useContext} from "react"
import PokeBall from "../pokeballSprite.png"
import TeamDisp from "./TeamDisp.js"
import {TeamSizeContext} from "../contexts/PokemonContext.js"
import { Container } from "semantic-ui-react"

function TeamForm({onSubmitForm}) {
    const [teamName, setTeamName] = useState('')
    const {teamSize} = useContext(TeamSizeContext)
    
    function handleNewName(e) {
        setTeamName(e.target.value)
    }
    function handleSaveTeam(newTeamArr) {
        if (
            (newTeamArr.filter(pokemon => typeof pokemon.id !== 'string').length == teamSize) &&
            (teamName.length >= 1)
        ) {
            const newPokeObj = {
                "name": teamName,
                "pokemon": newTeamArr
            }
            onSubmitForm(newPokeObj)
        } 
    }
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
    const blankTeam = templateBlankTeam.slice(0, teamSize)
    return (
        <div>
            <h1>Build a new team here</h1>
            <label>
                <h3>Name: </h3>
                <input className="newName" onChange={handleNewName} value={teamName}/>
            <br></br>
            <Container>
                <TeamDisp 
                teamArr={blankTeam}
                saveEdits={handleSaveTeam}
                />
            </Container>
            </label>
            <h1></h1>
        </div>
    )
}

export default TeamForm