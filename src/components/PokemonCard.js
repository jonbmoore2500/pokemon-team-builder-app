import React from "react"
import { Card } from "semantic-ui-react";
import SubCard from "./SubCard.js"
import Selector from "./Selector.js"

function PokemonCard({pokemonData, dispExtra, editable, onCardClick, onEditTeam}) {
    const pokeName = (pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1))
    
    function handleClick() {
        onCardClick()
    }
    function onSelectNew(newValue) {
        const oldValueId = pokemonData.id
        onEditTeam(oldValueId, newValue)
    }

    
    return (
        <Card onClick={handleClick}>
            <h2>{pokeName}</h2>
            <img src={pokemonData.sprites.front} alt={pokeName} />
            {
            dispExtra ? 
            <SubCard pokemonData={pokemonData} /> :
            null
            }
            {
            editable ?
            <Selector onSelectNew={onSelectNew}/> :
            null    
            }
        </Card>
    )
}

export default PokemonCard