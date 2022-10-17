# Pokemon Team Builder Read Me


## Description

The Pokemon Team Builder allows a user to set a team size, explore the available pokemon (including with the option to filter by type), get random pokemon suggestions, and build, edit, and delete teams of pokemon. All team edits are stored in a RESTful API, meaning that new teams, as well as the editing and/or deletion of old teams, is maintained.


## Components

App
 - Handles initial GET fetch request
 - Provides context to all route options

Header
 - Contains app title
 - Displays NavBar

NavBar
 - Provides links to different routes for purposes of client side routing

Home
 - Displays welcome information
 - Contains SetTeamSize component as a child

SetTeamSize
 - Allows the user to set the size of a team, pass that value up to App for use with TeamSizeContext

Explore
 - Contains title and components to display all available pokemon cards, filter those cards

Filter
 - Allows the user to filter the cards displayed in Explore based on type

PokemonDisp
 - Container for PokemonCard components
 - Contains PokemonCards for all available pokemon available to be displayed

PokemonCard
 - Contains all necessary data for a pokemon in a Semantic UI card
 - Can display SubCard or Selector subcomponents depending on certain parameters

SubCard
 - Contains HP and type data for pokemon
 - Displays on card click in /explore and /random routes

RandomPokemon
 - Displays a single PokemonCard containing a random pokemon that changes every few seconds

BuildTeams
 - Contains the TeamForm and displays all new and preexisting teams

TeamForm
 - Allows the user to set a team name, replace all placeholder pokeballs with pokemon, and save the new team

TeamDisp
 - Similar to PokemonDisp, displays a PokemonCard for each pokemon in a given team
 - Include delete and save buttons under certain conditions, deleting or saving the team
 - Each PokemonCard contains the Selector component to change its value

Selector
 - Contains a dropdown menu with an option for each available pokemon
 - Allows the user to replace the pokemon in a team


## Component Flow

(please open in a text editor for proper formatting, I will look into a GitHub-friendly format in the future)

└── App
    ├── Header
    |   └── NavBar
    |
    ├── Home
    |   └── SetTeamSize
    ├── Explore
    |   ├── Filter
    |   └── PokemonDisp
    |        ├─ PokemonCard
    |        |  └── SubCard
    |        └─ PokemonCard (for each available pokemon)
    |           └── SubCard
    ├── RandomPokemon
    |   └─ PokemonCard
    |       └── SubCard
    └── BuildTeams
        ├── TeamForm
        |   └── TeamDisp
        |        ├─ PokemonCard
        |        |  └── Selector
        |        └─ PokemonCard (to equal team size from SetTeamSize)
        |           └── Selector
        ├── TeamDisp
        |   ├─ PokemonCard
        |   |  └── Selector
        |   └─ PokemonCard (for each pokemon in team)
        |      └── Selector
        └── TeamDisp (for each saved team)
            ├─ PokemonCard
            |  └── Selector
            └─ PokemonCard (for each pokemon in team)
               └── Selector


## Context

This app utilizes the PokemonContext.js file to store 2 contexts - PokemonContext and TeamSizeContext

 - PokemonContext - the array of available pokemon. Used to create cards and populate Explore, be options for RandomPokemon, and populate the dropdown menu in Selector component with options for team members.
 - TeamSizeContext - the size of a new team. Set in SetTeamSize, displayed there and used to create the proper number of placeholder cards in the TeamForm component.



## Routing

The app uses client-side routing with four routes:

Home - "/"
 - Explains the basic functionality of the app and allows the user to set a team size
Explore - "/explore"
 - Allows the user to view all the pokemon options
 - Display extra information on clicking a card
 - Filter the options by type with a dropdown menu
Get a Recommendation - "/random"
 - Shows the user a new random pokemon from the available set every few seconds
Build a Team = "/buildteams"
 - Displays a new team form with the team size set in Home
 - Allows the user to create and name a team, then save it with a PUSH fetch command
 - Allows the user to edit team members from preexisting teams, with edits saved via a PATCH fetch command
 - Allows the user to edit existing teams via a DELETE fetch command


## Roadmap

Potential future features:
 - Add additional filter options to explore page (HP, alphabetically, ability to evolve, etc)
 - Edit team names in addition to team makeup
 - Add new members to old teams, delete individual members from old teams without replacing with a new pokemon
 - Allow users building a team to specify what types they want to be strong against, warning the user if they don't meet a certain threshold of specific types in their teams


 ## Acknowledgements

 Thank you to Nintendo, Game Freak, and Creatures (The Pokemon Company) for coming up with the various Pokemon, Professor Oak, and the Pokeball. 
 Thank you to the PokeAPI for maintaining the various sprites used for the Pokemon. (https://github.com/PokeAPI)