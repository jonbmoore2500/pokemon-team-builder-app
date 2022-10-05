import React, {useState} from "react"
import { Card } from "semantic-ui-react";
import SubCard from "./SubCard.js"
import Selector from "./Selector.js"
import '../App.css';

function PokemonCard({pokemonData, editable, onEditTeam}) {
    const pokeName = (pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1))
    const [dispExtra, setDispExtra] = useState(false)

    function handleClick() {
        if (editable !== true) {
            setDispExtra(!dispExtra)
        }
    }
    function onSelectNew(newValue) {
        const oldValueId = pokemonData.id
        onEditTeam(oldValueId, newValue)
    }

    
    return (
        <Card onClick={handleClick} >
            <div className={'pokeCard'}>
                <h2>{pokeName}</h2>
                <img src={pokemonData.sprites.front} alt={pokeName} className={'pokemonpic'}/>
                {
                dispExtra ? 
                <SubCard pokemonData={pokemonData} /> :
                null
                }
                {
                editable ?
                <Selector onSelectNew={onSelectNew}/> :
                null    
                }
            </div>    
        </Card>
    )
}

export default PokemonCard