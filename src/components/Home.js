import React from "react"
import SetTeamSize from "./SetTeamSize.js"
import ProfOak from "../ProfessorOak.jpg"

function Home({handleSetSize}) {


    function onSetSize(teamSize){
        handleSetSize(teamSize)
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <div className="oakPic">
                <img src={ProfOak} alt="Professor Oak" style={{ width: 280 }}/>    
            </div>
            <div className="homeText">
                <p>
                    Hello there, I'm Professor Oak! I'm here to help you put together teams of Pokemon. 
                    You can put together a Pokemon team for any reason - they could battle well together, 
                    they could all be the same type, or you could just like them! Whatever your reason for 
                    choosing a group of Pokemon, you can set a team, give it a name, and save it to use or 
                    change later. The typical group size is 6, but you can change it to be as low as 3 or 
                    as high as 10. Keep in mind that once you choose a team size you can't change it!
                </p> 
                <p> 
                    What would you like your team size to be?
                </p>
                <SetTeamSize onSetSize={onSetSize}/>
            </div>
        </div>
    )
}

export default Home