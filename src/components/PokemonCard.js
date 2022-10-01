import React from "react"
import { Card } from "semantic-ui-react";

function PokemonCard({pokemonData}) {
    const pokeName = (pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1))
    
    return (
        <Card>
            <h1>{pokeName}</h1>
            <img src={pokemonData.sprites.front} alt={pokeName}/>
        </Card>
    )
}

export default PokemonCard