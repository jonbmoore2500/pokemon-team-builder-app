import React from "react"
import PokemonCard from "./PokemonCard.js"
import { Card } from "semantic-ui-react";

function PokemonDisp({pokemonArr}) {
    
{/* use state and a timer to switch between true and 
false, use to toggle front/back view for selected card */}
    return (
        <div className="ui three cards">
            {pokemonArr.map((pokemon) => (
            <PokemonCard 
            key={pokemon.id} 
            pokemonData={pokemon} 
            />
            ))}
        </div>
    )
}

export default PokemonDisp