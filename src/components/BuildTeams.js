import React, {useState} from "react"
// import NewTeamContainer from "./NewTeamContainer"
import TeamDisp from "./TeamDisp"
import PokeBall from "../pokeball.png"

function BuildTeams() {
    const [teamName, setTeamName] = useState('')
    function handleNewName(e) {
        setTeamName(e.target.value)
    }
    function handleSaveTeam(newTeamArr) {
        console.log(newTeamArr)
    }
    
    
    
    
    const blankTeam = [
        {"id": 1,
         "name": "Choose your first Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 2,
         "name": "Choose your second Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 3,
         "name": "Choose your third Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 4,
         "name": "Choose your fourth Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 5,
         "name": "Choose your fifth Pokemon",
         "sprites": {"front": PokeBall}
        },
        {"id": 6,
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