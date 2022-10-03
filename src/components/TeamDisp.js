import React, { useState } from "react"
import PokemonCard from "./PokemonCard"
import { Container, Card } from "semantic-ui-react";

function TeamDisp({teamArr}) {
    const [newTeam, setNewTeam] = useState(teamArr)
    
    
    function handleCardClick() {
        // console.log('ive been clicked')
    }
    function handleSaveEdits(e) {
        console.log(e)
    }
    function handleNewPokemon(oldPokemon, newPokemon) {
        console.log(oldPokemon, newPokemon)
    }


    return (
        <Card.Group itemsPerRow={3}>
            {teamArr.map((member) => (
                <PokemonCard 
                key={member.name} 
                pokemonData={member} 
                dispExtra={true} 
                onCardClick={handleCardClick} 
                editable={true}
                onEditTeam={handleNewPokemon}/>
            ))}
            <button onClick={handleSaveEdits}>Save changes?</button>
        </Card.Group>    
    )
}


export default TeamDisp