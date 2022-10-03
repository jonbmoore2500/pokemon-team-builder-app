import React, {useContext} from "react"
import {PokemonContext} from "../contexts/PokemonContext.js"

function Selector({onSelectNew}) {
    const {pokemonArr} = useContext(PokemonContext)
    
    function handleOnChange(e) {
        onSelectNew(e.target.value)
    }
    


    return (
        <div>
            <h1>selector</h1>
            <label>
                <h3>Choose a pokemon:</h3>
                <select onChange={handleOnChange}>
                    {pokemonArr.map((pokemon) => (
                        <option key={pokemon.name + pokemon.id} value={pokemon.name}>
                         {pokemon.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default Selector