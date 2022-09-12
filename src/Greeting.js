// export function Saludar() {
//   function add(x, y) {
//     return x + y;
//   }
//   return (
//     <>
//       <h1>{add(10, 30)}</h1>
//     </>
//   );
// }
//Esto esta en el archivo index.js linea 200

//Los componentes [Saludar()] tienen que empezar con la letra MAY al inicio esto es
//esencial por que podemos diferenciar los componentes de JSX DE HTML. Las etiquetas
//de jsx siempre empiezan al inicio con una MAY.

// export function UserCard(props) {
//     console.log(props)
//     return <h1>{props.title}</h1> //Le decimos que vas a mostrar props la propiedad title
// }

//Podemos importarlo al archivo en la misma linea de codigo que Saludar() Hasta
//podemos mostrarlo con una nueva etiqueta archivo index.js linea 217.
//---------------------------------------------------------------------------------- Como props es un objeto lo podemos estructurar tambien:

// export function UserCard({title, from = "Nada"}) {
//     console.log(title, from)
//     return <h1>{title} desde {from}</h1> //Le decimos que vas a mostrar props la propiedad title
// }
//Le decimos que vamos a extraer el title de este objeto. El = "Nada" es para aquellas etiquetas que no tienen nada de la segunda propiedad, las que estan undefined.
//-------------------------------------------------------------------------------------
//Como hago si quiero recibir la informacion de user card. [244]index.js

// export function UserCard(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>💵{props.amout}</p>
//       <p>{props.casado ? "casado" : "No casado"}</p>
//       <ul>
//         <li>City: {props.address.city}</li>
//         <li>Calle: {props.address.street}</li>
//       </ul>
//     </div>
//   );
// }
//Tener en cuenta que tambien se puede poner las propiades en la linea 34 dentro de
//los parentesis, eso ya lo vimos:

// export function UserCard({name, address, amout, casado, greet}) {
//   return (<div>
//       <h1>{name}</h1>
//       <p>💵{amout}</p>
//       <p>{casado ? "casado" : "No casado"}</p>
//       <ul>
//         <li>City: {address.city}</li>
//         <li>Calle: {address.street}</li>
//       </ul>
//     </div>
//   );
// }
