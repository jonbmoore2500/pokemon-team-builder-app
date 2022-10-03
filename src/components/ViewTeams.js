import React, {useState, useEffect} from "react"
import TeamDisp from "./TeamDisp.js"


function ViewTeams() {
    const [teamsArr, setTeamsArr] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/teams')
        .then(r => r.json())
        .then(data => setTeamsArr(data))
    }, [])

    return (
        <div>
            <h2>View and edit your teams here!</h2>
            {teamsArr.map((team) => (
                <div key={team.id}>
                    <h3>{team.name}</h3>
                    <TeamDisp teamArr={team.pokemon}/>
                </div>
            ))}
        </div>
    )
}


export default ViewTeams