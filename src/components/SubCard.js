import React from "react"

function SubCard({pokemonData}) {
    return (
        <div>
            {pokemonData.types.length === 2 ? 
            <h3>Types: {pokemonData.types.join(', ')}</h3> :
            <h3>Type: {pokemonData.types}</h3>}
            <h3>HP: {pokemonData.hp}</h3>
            <h3>Can be evolved? Functionality to be added</h3>
        </div>
    )
}

export default SubCard