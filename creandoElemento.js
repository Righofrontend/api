/*
CREANDO ELEMENTOS CON createElement()

Mediante el método .createElement() podemos crear un element HTML en memoria 
(¡no estará insertado aún en nuestro documento HTML!). Con dicho elemento
alamcenado en una variable o cosntante, podemos modificar sus caracterpisticas
o contenido, para posteriormente insertarlo en una posición  determinada del 
DOM o docuemneto HTML



*/

const parrafo = document.createElement("p");


/*
MÉTODO .cloneNode()
*/

/*
USANDO FRAGMENTOS 
En algunas ocaciones, nos puede resultar muy interesante utilizar fragmentos.
Los fragmentos son una especie de docuemnto paralelo, aislado de la página
con la que estamos trabajando, que tiene varias características
*/

const fragment = document.createDocumentFragment();

for (let i = 0; i < 5000; i++) {
  const div = document.createElement("div");
  div.textContent = `Item número ${i}`;
  fragment.appendChild(div);
}

document.body.appendChild(fragment);