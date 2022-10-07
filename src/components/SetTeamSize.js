import React from "react"

function SetTeamSize({onSetSize}) {

    function handleSetSize(e) {
        onSetSize(e.target.value)
    }
    return (
        <div>
            <form onChange={handleSetSize}>
                <label>Team size: </label>
                <select defaultValue="6">
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </form>
        </div>
    )
}

export default SetTeamSize