/*
ESCUCHAR EVENTOS CON OBJETOS

Como hemos visto, aunque el trabajo con eeventos no es especialmente complejo,
dependiendo de la situación se puede complicar mucho. Además, cuando tenemos muchos eventos,
se vuelve tediosos organizar, y corremos el riesgo de que se vuelva muy complejo.
Existe un patrón Javascript muy interesante y desconocido que permite organizar y administrar
los enventos de una forma muy elegante.

En lugar de una función function, es posible asociar una ofunción a un Object.Este objeto
debe contener un método mágico. handleEvent(). Si lo hacemos, dicho método recibirá el evento
y podremos gestionarlo desde su interior:

*/

// const button = document.querySelector("button");
// const eventManager = {
//     handleEvent: function(ev){
//         alert("¡Has hecho click!");
//     }
// }
// button.addEventListener("click", eventManager)

/*
De esta forma, si tenémos múltiples eventos, podremos centralizar su adminostración,
desde dicho objeto, accediendo a ev, que es el objeto con información sobre el evento disparado,
donde podemos consultar muchas de sus propiedades, que nos brindan informacipon interesante:

ev.type devuelve el tipo de evento disparado: click
ev.target devuelve el elemento que disparó el evento: <button>
ev.ctrlkey devuelve boolean si la tecla CTRL estaba pulsada
*/

const button = document.querySelector("button")

const eventManager = {
    handleEvent: function(ev){
        if(ev.type === "click"){
            alert("Has hecho click")
        }else if (ev.type === "mouseleave"){
            alert("has abandonado el button")
        }
    }
}

button.addEventListener("click", eventManager)
button.addEventListener("mouseleave", eventManager)
