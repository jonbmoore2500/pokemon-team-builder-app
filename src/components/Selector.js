import React, {useContext} from "react"
import {PokemonContext} from "../contexts/PokemonContext.js"

function Selector({onSelectNew}) {
    const {pokemonArr} = useContext(PokemonContext)
    
    function handleOnChange(e) {
        // creates placeholder, prevents placeholder from being used as value
        if (e.target.value.slice(-1) !== '!') {
            onSelectNew(e.target.value)
        }    
        
    }
    
// need to prevent duplicates either here or in function in TeamDisp

    return (
        <div>
            <h1>selector</h1>
            <label>
                <h3>Choose a pokemon:</h3>
                <select onChange={handleOnChange}>
                    <option id="placeholder">Choose a pokemon!</option>
                    {pokemonArr.map((pokemon) => (
                        <option key={pokemon.name} value={pokemon.name}>
                         {pokemon.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default Selector