import React from "react"

function Filter({onTypeFilterChange, value}) {

    
    function handleTypeFilter(e) {
        onTypeFilterChange(e.target.value)
    }

    return (
        <div className="ui search">
            <div className="ui icon label">
                <label>
                    <h3>Filter by type: </h3>
                    <select onChange={handleTypeFilter} value={value}>
                        <option value="all">all</option>  
                        <option value="normal">normal</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value="ice">ice</option>
                        <option value="fighting">fighting</option>
                        <option value="poison">poison</option>
                        <option value="ground">ground</option>
                        <option value="flying">flying</option>
                        <option value="psychic">psychic</option>
                        <option value="bug">bug</option>
                        <option value="rock">rock</option>
                        <option value="ghost">ghost</option>
                        <option value="dragon">dragon</option>
                        <option value="fairy">fairy</option>
                    </select>
                </label>
            </div>
        </div>
    )
}


export default Filter