import React, {useContext} from "react"
import {PokemonContext} from "../contexts/PokemonContext.js"

function Selector({onSelectNew}) {
    const {pokemonArr} = useContext(PokemonContext)
    
    function handleOnChange(e) {
        if (e.target.value.slice(-1) !== '!') {
            onSelectNew(e.target.value)
        }    
    }


    return (
        <div>
            <label>
                <h4>Choose a pokemon:</h4>
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