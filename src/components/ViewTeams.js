import React, {useState, useEffect} from "react"
import TeamDisp from "./TeamDisp.js"
import { Container } from "semantic-ui-react"

function ViewTeams() {
    const [teamsArr, setTeamsArr] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/teams')
        .then(r => r.json())
        .then(data => setTeamsArr(data))
    }, [])

    function handleSaveEdits(updateTeam, teamId) {
        fetch(`http://localhost:3000/teams/${teamId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pokemon: updateTeam})
        })
        .then(r => r.json())
        .then(data => {
            const newTeamsArr = teamsArr.map((team) => {
                if (team.id === data.id) {
                    team = data
                }
                return team
            })
            setTeamsArr(newTeamsArr)
        })
    }

    function deleteTeam(idToDelete) {
        fetch(`http://localhost:3000/teams/${idToDelete}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            const newTeamsArr = teamsArr.filter(team => team.id !== idToDelete)
            setTeamsArr(newTeamsArr)
        })
    }

    return (
        <Container>
            <h2>View and edit your teams here!</h2>
            {teamsArr.map((team) => (
                <div key={team.id}>
                    <h3>{team.name}</h3>
                    <TeamDisp 
                    teamArr={team.pokemon} 
                    teamId={team.id} 
                    saveEdits={handleSaveEdits}
                    canDelete={true}
                    deleteTeam={deleteTeam}
                    />
                    <h1></h1>
                </div>
            ))}
        </Container>
    )
}


export default ViewTeams