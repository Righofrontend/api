const endPoint = `https://rickandmortyapi.com/api`;
//console.log(endPoint)

//Consulta primer endpoint
const consultaRickMorty = () => {
    fetch(endPoint)
        .then(res => res.json())
        .then(data => {
            //console.log(data.episodes)
            const urlEpisodios = data.episodes
            consultarEpisodio(urlEpisodios)
        })
}

consultaRickMorty()


//Segunda url que arroja el primer endpoint
const consultarEpisodio = (urlEpisodios) => {
    //console.log(urlEpisodio)

    fetch(urlEpisodios)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(e => {
                e.characters.forEach(ele => {
                    consultarCapitulo(ele)
                })
            })
        })
}


//Tercer consulta de url, consulta de capitulos
const consultarCapitulo = (episodioCapitulo) => {
    //console.log(episodioCapitulo)

    fetch(episodioCapitulo)
        .then(res => res.json())
        .then(data => {

            let infoCapitulo = data
            // console.log(urlCapitulo)
            renderCapitulo(infoCapitulo)

        })

}


//Renderizado de capitulos en el DOM
const renderCapitulo = (infoCapitulo) => {
    // console.log(episodioCapitulo)
    const contenedor = document.getElementById("poke-container")
    let episodioContainer = document.createElement("div"),
        figureContainer = document.createElement("figure"),
        episodioName = document.createElement("figcaption"),
        episodioImagen = document.createElement("img")

    episodioName.innerText = infoCapitulo.name
    episodioImagen.setAttribute("src", infoCapitulo.image)
    episodioImagen.setAttribute("class", "img-personaje")
    figureContainer.append(episodioImagen, episodioName)
    episodioContainer.append(figureContainer)


    contenedor.appendChild(episodioContainer)
}