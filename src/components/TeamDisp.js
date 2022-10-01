import React from "react"
import PokemonCard from "./PokemonCard"
import { Container, Card } from "semantic-ui-react";

function TeamDisp({teamArr}) {
    console.log(teamArr)
    function handleCardClick() {
        console.log('ive been clicked')
    }
    
    return (
        <Card.Group itemsPerRow={3}>
            {teamArr.map((member) => (
                <PokemonCard key={member.name} pokemonData={member} dispExtra={true} onCardClick={handleCardClick} editable={true}/>
            ))}
        </Card.Group>    
    )
}


export default TeamDisp