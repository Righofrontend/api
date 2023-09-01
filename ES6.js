/**
 ENLACE DE REFERENCIA
 https://lenguajejs.com/javascript/eventos/el-metodo-handleevent/#mediante-funciones-referencia
 */

/*
MEDIANTE FUNCIONES CON BIND
Otra opcón, es escribir this.sendMesajje.bind(this), que lo que hace es llamar al método bind
pasandole this por parámetro, del método de clase que queremos ejecutar. ¿Qué hace esto realmente?
pues en pocas palabras, realiza una copia de lafunción que queremos ejecutar, y le pasa por par+ametro
el elemento que va a puntar a this.
*/

// class EventManager {
//     constructor(element) {
//       element.addEventListener("click", this.sendMessage.bind(this));
//     }
  
//     sendMessage() {
//       alert("Has hecho click en el botón");
//       console.log(this);    // this = referencia a EventManager
//     }
//   }
  
//   const button = document.querySelector("button");
//   const eventManager = new EventManager(button);

class EventManager {
    constructor(element) {
      element.addEventListener("click", () => this.sendMessage());
    }
  
    sendMessage() {
      alert("Has hecho click en el botón");
      console.log(this);    // this = referencia a EventManager
    }
  }
  
  const button = document.querySelector("button");
  const eventManager = new EventManager(button);