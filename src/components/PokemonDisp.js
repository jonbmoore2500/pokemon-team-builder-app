import React from "react"
import PokemonCard from "./PokemonCard.js"
import { Container } from "semantic-ui-react";

function PokemonDisp({pokemonArr}) {
console.log(pokemonArr)
    return (
        <Container>
            <h1>pokemondisp component</h1>
            {pokemonArr.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemonData={pokemon}/>
            ))}
        </Container>
    )
}

export default PokemonDisp