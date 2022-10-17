import React from "react"

function SubCard({pokemonData}) {
    return (
        <div>
            {
            pokemonData.types.length === 2 ? 
            <h4>Types: {pokemonData.types.join(', ')}</h4> :
            <h4>Type: {pokemonData.types}</h4>
            }
            <h4>HP: {pokemonData.hp}</h4>
        </div>
    )
}

export default SubCard