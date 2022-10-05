import React, {useContext} from "react"
import PokemonDisp from "./PokemonDisp.js"
import { Container } from "semantic-ui-react"
import {PokemonContext} from "../contexts/PokemonContext.js"

function Explore() {
    const {pokemonArr} = useContext(PokemonContext)

    return (
        <Container>
            <h1>Learn about the available pokemon here</h1>
            {/* add filter? 
            alphabetical? reverse alphabetical? type? hp? favorite (persistent or not)? can evolve?
            */}
            <PokemonDisp pokemonArr={pokemonArr}/>
        </Container>
    )
}


export default Explore