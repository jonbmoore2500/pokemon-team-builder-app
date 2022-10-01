import React from "react"
import PokemonCard from "./PokemonCard"
import { Container, Card } from "semantic-ui-react";

function TeamDisp({teamArr}) {
    console.log(teamArr)
    return (
        <Card.Group itemsPerRow={3}>
            {teamArr.map((member) => (
                <PokemonCard key={member.name} pokemonData={member} dispExtra={true}/>
            ))}
        </Card.Group>    
    )
}


export default TeamDisp