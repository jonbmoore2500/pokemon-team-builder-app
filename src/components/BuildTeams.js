import React, {useState} from "react"
import TeamDisp from "./TeamDisp"
import PokeBall from "../pokeball.png"

function BuildTeams() {
    const [teamName, setTeamName] = useState('')
    function handleNewName(e) {
        setTeamName(e.target.value)
    }
    function handleSaveTeam(newTeamArr) {
        if (
            (newTeamArr.filter(pokemon => typeof pokemon.id !== 'string').length === 6) &&
            (teamName.length >= 1)
        ) {
            // fetch()
        } 
        // use newTeamArr with team name (check if name is string of length >= 1, fetch POST. use history to go to TeamDisp?)
    }
    
    
    
    
    const blankTeam = [
        {"id": 'a',
         "name": "Choose your first Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 'b',
         "name": "Choose your second Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 'c',
         "name": "Choose your third Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 'd',
         "name": "Choose your fourth Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 'e',
         "name": "Choose your fifth Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 'f',
         "name": "Choose your sixth Pokemon",
         "sprites": {"front": PokeBall}
        }
    ]

    
    return (
        <div>
            <h1>Build a new team here</h1>
            <label>
                <h3>Name: </h3>
                <input className="newName" onChange={handleNewName}/>
            </label>
            <TeamDisp 
            teamArr={blankTeam}
            saveEdits={handleSaveTeam}
            />
        </div>
    )
}


export default BuildTeams