import React from "react"

function Selector({pokemonData}) {
    console.log(pokemonData)
    return (
        <div>
            <h1>selector</h1>
            <label>
                <h3>Choose a pokemon:</h3>
                {/* {pokemonData.map((pokemon) => (
                    <option key={pokemon.name + pokemon.id} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))} */}
            </label>
        </div>
    )
}

export default Selector