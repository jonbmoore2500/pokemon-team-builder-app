import React from "react"
import NavBar from "./NavBar.js"
import PokeBall from "../pokeballSprite.png"

function Header() {


    return (
        <div>
            <div className="headername">
                {/* <img src={PokeBall} alt="pokeball"/> */}
                {/* figure out how to make pokeballs appear inline with h1, spin */}
                <h1> Pokémon Team Builder </h1>
                {/* <img src={PokeBall} alt="pokeball"/> */}
            </div>
            <NavBar />
        </div>
    )
}

export default Header