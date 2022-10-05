import React from "react"
import PokemonCard from "./PokemonCard.js"
import { Card, Container } from "semantic-ui-react";

function PokemonDisp({pokemonArr}) {
    
{/* use state and a timer to switch between true and 
            false, use to toggle front/back view for selected card */}
    return (
        <Card.Group itemsPerRow={3}>
            {pokemonArr.map((pokemon) => (
            <PokemonCard 
            key={pokemon.id} 
            pokemonData={pokemon} 
            />
            ))}
        </Card.Group>
    )
}

export default PokemonDisp