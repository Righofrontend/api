// document.addEventListener("DOMContentLoaded", e => {
//     alert("Bienvenido a la web de tu serie favorita Rick and Morty")
// })

const pokemonID = 21;
const url = `https://pokeapi.co/api/v2/pokemon/`;


const consultaPokemon = () => {
    fetch(url)
    .then(res => res.json())
    .then(pokemones => 
    pokemones.results.forEach(pokemon => 
        pokemonData(pokemon)
        )


    )
}

consultaPokemon()

const pokemonData = (pokemon) => {
    //console.log(pokemon)
    const urlPokemon = pokemon.url
    //console.log(urlPokemon)

    fetch(urlPokemon)
    .then(res => res.json())
    .then(pokemonInfo =>{
       // console.log(pokemonInfo)
        renderizarPokemon(pokemonInfo)
    }
        )

}



const renderizarPokemon = (pokemonInfo) => {
    const contenedorPokemones = document.getElementById('poke-container')
    let pokeContainer = document.createElement('div')
     let pokeName = document.createElement('h3')
     pokeName.innerText = pokemonInfo.name

    // console.log(pokemonInfo.name)

    contenedorPokemones.append(pokeName)
}

renderizarPokemon()