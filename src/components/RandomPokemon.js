import React, {useContext, useState, useEffect} from "react"
import PokemonCard from "./PokemonCard"
import {PokemonContext} from "../contexts/PokemonContext.js"
import { Card, Container } from "semantic-ui-react"


function RandomPokemon() {
    const {pokemonArr} = useContext(PokemonContext)
    const [randNum, setRandNum] = useState(Math.floor(Math.random() * 151))
    const randomPokeObj = pokemonArr[randNum]
    
    useEffect(() => {
        setInterval(() => {
            setRandNum(Math.floor(Math.random() * 151))
        }, 5000)
    }, [])

    return (
        <Container>
            <h1>Let us make some recommendations:</h1>
            <Card.Group itemsPerRow={1}>
                {
                typeof randomPokeObj === "object" ? 
                <PokemonCard pokemonData={randomPokeObj}/> :
                null
                }
            </Card.Group>
        </Container>
    )
}

export default RandomPokemon