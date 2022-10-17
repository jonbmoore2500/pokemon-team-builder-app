import React from "react"
import PokemonCard from "./PokemonCard.js"
import { Card } from "semantic-ui-react";

function PokemonDisp({pokemonArr}) {
    

    return (
        <Card.Group itemsPerRow={6}>
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