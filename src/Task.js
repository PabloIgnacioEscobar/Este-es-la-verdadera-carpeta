// export function TaskCard() {
//     return (
//     <div style={{background: '#202020', color: '#fff', padding: '20px'}}>
//         <h1 style={{fontWeight: "lighter"}}>Mi primer tarea</h1>
//         <p>Tarea realizada</p>
//     </div>);
// }

//Para ingresar un estilo tenemos que ingresar la propiedad dentro un objeto, con dos llaves. Y el valor dentro un string: ''
//control y espacio en el moento que escribamos algo, nos muestra el resto de lo que queremos escribir. Te muestra el autocompletado.
//-----------------------------------------------------------------------------------
//Tambien podemos guardar los estilos en una variable, no nos olvidemos.

// export function TaskCard() {

//     const cardStyles = {background: '#202020', color: '#fff', padding: '20px'};

//     const titleStyle = {fontWeight: "lighter"};

//     return (
//     <div style={cardStyles}>
//         <h1 style={titleStyle}>Mi primer tarea</h1>
//         <p>Tarea realizada</p>
//     </div>);
// }
//-----------------------------------------------------------------------------------
//Tambien podemos estilizar por clases en css. archivo: task.css. Lo que se hace en react es importar la clase. Aqui a la propiedad de la clase se le pone className.
// import './task.css'

// export function TaskCard() {
//     return (
//     <div className='card'>
//         <h1>Mi primer tarea</h1>
//         <p>Tarea realizada</p>
//     </div>);
// }
//
//-----------------------------------------------------------------------------------
// import './task.css'
// export function TaskCard({ boleano }) {
//   return (
//     <div className="card">
//       <h1>Mi primer tarea</h1>
//       <span style={boleano ? { color: "green" } : { color: "red" }}>
//         {boleano === true ? "Tarea realizada" : "Tarea Pendiente"}
//       </span>
//     </div>
//   );
// }
//{boleano} Esta forma sirve para desestructurarlo, es para extraer el booleano de props. Las llaves sirven para interpretar codigo.
//-----------------------------------------------------------------------------------
