import React from "react"
import { Card } from "semantic-ui-react";
import SubCard from "./SubCard.js"

function PokemonCard({pokemonData, dispExtra}) {
    const pokeName = (pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1))
    
    
    return (
        <Card>
            <h1>{pokeName}</h1>
            <img src={pokemonData.sprites.front} alt={pokeName} />
            {dispExtra ? 
            <SubCard pokemonData={pokemonData} /> :
            null}
        </Card>
    )
}

export default PokemonCard