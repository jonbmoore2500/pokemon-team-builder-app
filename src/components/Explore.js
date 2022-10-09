import React, {useContext, useState} from "react"
import PokemonDisp from "./PokemonDisp.js"
import { Container } from "semantic-ui-react"
import {PokemonContext} from "../contexts/PokemonContext.js"
import Filter from "./Filter.js"

function Explore() {
    const {pokemonArr} = useContext(PokemonContext)
    const [filterVal, setFilterVal] = useState('all')
    const displayArr = pokemonArr.filter((pokemon) => filterVal === 'all' || pokemon.types.find(type => type === filterVal))
    
    function onFilterChange(typeToFilter) {
        setFilterVal(typeToFilter)
    }


    return (
        <div className="ui container">
            <h1>Learn about the available pokemon here</h1>
            <Filter onFilterChange={onFilterChange}/>
            <PokemonDisp pokemonArr={displayArr}/>
        </div>
    )
}


export default Explore