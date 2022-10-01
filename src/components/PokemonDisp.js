import React from "react"
import PokemonCard from "./PokemonCard.js"
import { Container } from "semantic-ui-react";

function PokemonDisp({pokemonArr}) {
console.log(pokemonArr)
    return (
        <Container>
            {pokemonArr.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemonData={pokemon}/>
            ))}

            {/* use state and a timer to switch between true and 
            false, use to toggle front/back view for selected card */}
        </Container>
    )
}

export default PokemonDisp