// let miImagen = document.querySelector("img")
// console.log(miImagen)

// miImagen.onclick = function () {
//     let miSrc = miImagen.getAttribute("src")
//     console.log(miSrc)

//     if (miSrc === "./images/naruto-1.jpg") {
//         miImagen.setAttribute("src", "./images/naruto-2.jpg")
//     } else {
//         miImagen.setAttribute("src", "./images/naruto-1.jpg")
//     }
// }

// let miBoton = document.querySelector("button")
// let miTitulo = document.querySelector("h1")

// const estableNombreUsuario = () => {
//     let minombre = prompt("Por favoringresa tu nombre")
//     localStorage.setItem("nombre", minombre)
//     miTitulo.textContent = "Mozilla es genial " + minombre
// }

// if(!localStorage.getItem("nombre")) {
//     estableNombreUsuario()
// }else{
//     let nombreAlmacenado = localStorage.getItem("nombre");
//     miTitulo.textContent = "Mozilla es genial " + " " + nombreAlmacenado
// }

// miBoton.onclick = function () {
//     estableNombreUsuario()
// }


const boton = document.querySelector(".btnImg"),
    imagen = document.querySelector("img")

class EventManager {
    constructor(element) {

        element.addEventListener("click", this.sendMessage)
    }

    sendMessage() {
        const srcImg = imagen.getAttribute("src")
        if (srcImg === "./img/naruto-1.jpg") {
            imagen.setAttribute("src", "./img/naruto-2.jpg")
        } else {
            imagen.setAttribute("src", "./img/naruto-1.jpg")
        }
    }
}

const eventManager = new EventManager(boton)


/******CAMBIAR USUARIO*********** */

const boton2 = document.querySelector(".btnUser"),
    titulo = document.querySelector("h1")



document.addEventListener("DOMContentLoaded", (e) => {

    if(localStorage.getItem("nombre") === null){
        let obtenerUsuario = prompt("Ingresa tu nombre")
        localStorage.setItem("nombre", obtenerUsuario)
        titulo.textContent = `Bienvenido ${obtenerUsuario}`
        
    }
    console.log("Hola dom")

    let nombreUsuario = localStorage.getItem("nombre")
    titulo.textContent = `Bienvenido ${nombreUsuario}`

})

const cambiarUsuario = () => {
 
        let obtenerUsuario = prompt("Ingresa tu nombre")
        localStorage.setItem("nombre", obtenerUsuario)
        titulo.textContent = `Bienvenido ${obtenerUsuario}`
    
}

boton2.addEventListener("click", cambiarUsuario)



// class EventManager2 {
//     constructor(element) {

//         element.addEventListener("click", this.sendMessage2)
//     }


//     sendMessage2() {

//         const cambiarUsuario = () =>{
//             let obtenerNombre = prompt("Ingresa tu nombre")
//             localStorage.setItem("nombre", obtenerNombre)
//             titulo.textContent = ` ${titulo, obtenerNombre}`
//         }
//         cambiarUsuario()


//         if(!localStorage.getItem("nombre")){
//             cambiarUsuario()
//         }else{
//             const nombreAlmacenado = localStorage.getItem("nombre");
//             titulo.textContent = `${nombreAlmacenado}`
//         }


//     }
// }

// const eventManager2 = new EventManager2(boton2)