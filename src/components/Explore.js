import React, {useContext} from "react"
import PokemonDisp from "./PokemonDisp.js"
import {PokemonContext} from "../contexts/PokemonContext.js"

function Explore() {
    const {pokemonArr} = useContext(PokemonContext)

    return (
        <div>
            <h1>Learn about the available pokemon here</h1>
            <PokemonDisp pokemonArr={pokemonArr}/>
        </div>
    )
}


export default Explore