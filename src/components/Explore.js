import React from "react"
import PokemonDisp from "./PokemonDisp.js"

function Explore({pokemonArr}) {


    return (
        <div>
            <h1>Learn about the available pokemon here</h1>
            <PokemonDisp pokemonArr={pokemonArr}/>
        </div>
    )
}


export default Explore