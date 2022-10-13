import React, {useState, useContext, useEffect} from "react"
import TeamDisp from "./TeamDisp"
import TeamForm from './TeamForm.js'
import { Container } from "semantic-ui-react"

function BuildTeams() {
    const [teamsArr, setTeamsArr] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/teams')
        .then(r => r.json())
        .then(data => setTeamsArr(data))
    }, [])
    
    const [resetKey, setResetKey] = useState(0)
    function handleSubmitForm(newPokemon) {
        fetch('http://localhost:3000/teams', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPokemon)
        })
        .then(r => r.json())
        .then(data => {
            setTeamsArr([data, ...teamsArr])
            setResetKey(resetKey + 1)
        })
    }

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
        <div>
            <TeamForm onSubmitForm={handleSubmitForm} key={resetKey}/>
            <Container>
                <h2>View and edit your teams here!</h2>
                {teamsArr.map((team) => (
                    <div key={team.id + team.name}>
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
        </div>
    )
}


export default BuildTeams