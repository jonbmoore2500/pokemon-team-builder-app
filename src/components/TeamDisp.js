import React, { useState, useContext } from "react"
import PokemonCard from "./PokemonCard"
import { Container, Card } from "semantic-ui-react";
import {PokemonContext} from "../contexts/PokemonContext.js"

function TeamDisp({teamArr, saveEdits, teamId, deleteTeam, canDelete}) {
    const [newTeam, setNewTeam] = useState(teamArr)
    const {pokemonArr} = useContext(PokemonContext)
    
    function handleSaveEdits() {
        saveEdits(newTeam, teamId)
    }
    function handleNewPokemon(toReplaceIndex, replaceName) {
        const newPokeObj = pokemonArr.find(pokemon => pokemon.name === replaceName)
        const updateTeam = newTeam.map((member, index) => {
            if (index === toReplaceIndex) {
                member = newPokeObj
            }
            return member
        })
        setNewTeam(updateTeam)
    }
    function handleDeleteTeam() {
        deleteTeam(teamId)
    }
    
    return (
        <Card.Group itemsPerRow={3}>
            {newTeam.map((member, index) => (
                <PokemonCard 
                key={member.name + index} 
                pokemonData={member}
                index={index} 
                editable={true}
                onEditTeam={handleNewPokemon}/>
            ))}
            <div className="buttonsDiv">
                <button onClick={handleSaveEdits} className="button">Save changes?</button>
                {
                canDelete ? 
                <button onClick={handleDeleteTeam} className="button">Delete this team?</button> :
                null
                }
            </div>
        </Card.Group>    
    )
}


export default TeamDisp