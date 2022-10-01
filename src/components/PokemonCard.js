import React from "react"
import { Card } from "semantic-ui-react";
import SubCard from "./SubCard.js"
import Selector from "./Selector.js"

function PokemonCard({pokemonData, dispExtra, editable, onCardClick}) {
    const pokeName = (pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1))
    
    function handleClick() {
        onCardClick()
    }
    
    return (
        <Card onClick={handleClick}>
            <h1>{pokeName}</h1>
            <img src={pokemonData.sprites.front} alt={pokeName} />
            {
            dispExtra ? 
            <SubCard pokemonData={pokemonData} /> :
            null
            }
            {
            editable ?
            <Selector /> :
            null    
            }
        </Card>
    )
}

export default PokemonCard