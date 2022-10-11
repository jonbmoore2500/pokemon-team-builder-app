import React, {useContext, useState} from "react"
import PokemonDisp from "./PokemonDisp.js"
import { Container } from "semantic-ui-react"
import {PokemonContext} from "../contexts/PokemonContext.js"
import Filter from "./Filter.js"

function Explore() {
    const {pokemonArr} = useContext(PokemonContext)
    const [typeFilterVal, setTypeFilterVal] = useState('all')
    const displayArr = pokemonArr.filter((pokemon) => typeFilterVal === 'all' || pokemon.types.find(type => type === typeFilterVal))
    
    function onTypeFilterChange(typeToFilter) {
        setTypeFilterVal(typeToFilter)
    }


    return (
        <Container>
            <h1>Learn about the available pokemon here</h1>
            <Filter onTypeFilterChange={onTypeFilterChange} value={typeFilterVal}/>
            <PokemonDisp pokemonArr={displayArr}/>
        </Container>
    )
}


export default Explore