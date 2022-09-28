import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {


    return (
        <div className="navBar">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/Explore" exact>Explore</NavLink>
            <NavLink to="/BuildTeam" exact>Build a Team</NavLink>
            <NavLink to="/ViewTeams" exact>View Your Teams</NavLink>
        </div>
    )
}

export default NavBar