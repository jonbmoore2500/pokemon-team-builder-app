import React, { useState, useContext } from "react"
import PokemonCard from "./PokemonCard"
import { Container, Card } from "semantic-ui-react";
import {PokemonContext} from "../contexts/PokemonContext.js"

function TeamDisp({teamArr, saveEdits, teamId}) {
    const [newTeam, setNewTeam] = useState(teamArr)
    const {pokemonArr} = useContext(PokemonContext)
    
    function handleCardClick() {
        // console.log('ive been clicked')
    }
    function handleSaveEdits() {
        saveEdits(newTeam, teamId)
        // take newTeam and the team arr, pass up to ViewTeams and patch
    }
    function handleNewPokemon(toReplaceId, replaceName) {
        const newPokeObj = pokemonArr.filter(pokemon => pokemon.name === replaceName)
        const updateTeam = newTeam.map((member) => {
            if (member.id === toReplaceId) {
                member = newPokeObj[0]
            }
            return member
        })
        setNewTeam(updateTeam)
    }
    function handleDeleteTeam(e) {
    }

    return (
        <Card.Group itemsPerRow={3}>
            {newTeam.map((member) => (
                <PokemonCard 
                key={member.name} 
                pokemonData={member} 
                dispExtra={true} 
                onCardClick={handleCardClick} 
                editable={true}
                onEditTeam={handleNewPokemon}/>
            ))}
            <button onClick={handleSaveEdits}>Save changes?</button>
            <button onClick={handleDeleteTeam}>Delete this team?</button>
        </Card.Group>    
    )
}


export default TeamDisp