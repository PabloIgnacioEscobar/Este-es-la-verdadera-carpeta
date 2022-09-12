import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client"; //Voy a estar trabajando con react para el navegador, para manipular el DOM. Y que voy a importar su biblioteca client.
//import { Saludar } from "./Greeting";
// import { Button } from "./Button";
//import { TaskCard } from "./Task";                                                 import {Saludar} from './Saludar';
// const rootElement = document.getElementById('root') //Para seleccionar el id de html. Llamarlo.
// ReactDOM.createRoot(rootElement)
//No es nesesario guardarlo en una constante. Otra forma es pasar el
//document.getElementById('root') dentro del parenteris (root Element):
// import { Posts } from "./Posts";
const root = ReactDOM.createRoot(document.getElementById("root")); //Esto se le conoce como el elemento root
//Ya tenemos una aplicacion root inicializada. Ahora para decirle a react que voy
//a colocar dentro de mi aplicacion vamos a utilizar el root y usaremos una funcion
//llamada render. Esta funciona espera elementos hijos, elementos html.

// function Saludar() {
//     return <h1>Hello World</h1>
// }

// root.render(Saludar()) //Tambien se puede modificar el codigo desde aqui.

//Con todo esto tenemos una aplicacion de reat lista para ser mostrada.

// function Saludar() {
//     return <h1>Hello World</h1>
// }

// root.render(<div>
//     { Saludar() }
//     { Saludar() }
//     { Saludar() }
//     { Saludar() }
// </div>)
//--------------------------------------------------------------------------------
// function Saludar() {
//     return <h1>Hello World</h1>
// }

// root.render(<div>
//     <Saludar></Saludar>

//     <Saludar></Saludar>

//     <Saludar></Saludar>

//     <Saludar></Saludar>
// </div>)
//---------------------------------------------------------------------------------
// function Saludar() {
//     return <div>
//         <h1>Hello World</h1>
//     </div>
// }

// root.render(

// <div>

//     <Saludar/>

//     <Saludar/>

//     <Saludar/>

//     <Saludar/>

// </div>
// );
//-------------------------------------------------------------------------------------

// function Saludar() {
//     const name = 'fazt'
//     return <h1>{name}</h1>
// }
// root.render(
//     <Saludar />
// );

//Tambien no solo puede interpretar texto, sino tambien numeros. Tambien dentro
//de los corchetes se les puede poner sumas {10 + 10}
//----------------------------------------------------------------------------------
// function Saludar() {
//     const married = false
//     if (married) {
//         return <h1>Estoy casada</h1>
//     } else {
//         return <h1>No estoy casada</h1>
//     }
// }
// root.render(
//     <Saludar />
// )
// Cuando desarrollemos en react no es comun ver este codigo por que es muy largo
// hay una forma mas breve de escribir esto: Operador ternario, una sola linea de
// codigo.
//-----------------------------------------------------------------------------------
// function Saludar() {
//     const married = true
//     return <h1>{married ? 'Estoy casada' : "No estoy casada"}</h1> //? es if y : es else.
// }
// root.render(
//     <Saludar />
// )

//Podemos ponder emoticones tambien :D DENTRO del string.
//-----------------------------------------------------------------------------------
//Ya vimos strings booleanos y numeros, que pasa con los objetos de js?:

// function Saludar() {
//     const user = {
//         firtsName: 'ryan',
//         lastname: 'ray'
//     }
//     return <h1>{user}</h1> //No sabe como mostrarlo por que no es un string, no es un boleano es un objeto. hay que convertirlo en string. Con jason.
// }
// root.render(
//     <Saludar />
// )
//-----------------------------------------------------------------------------------
//Puede ser una variable sin ningun problema. Entonces al objeto hay que convertirlo
//a string:

// function Saludar() {
//     const user = {
//         firtsName: 'ryan',
//         lastname: 'ray'
//     }
//     return <h1>{JSON.stringify(user)}</h1> //Convierte un objeto js en su version string.
// }
// root.render(
//     <Saludar />
// )

//Si lo vemos en navegador, vamos a ver el objeto.
//-----------------------------------------------------------------------------------
//Igual es no es una buena forma de mostrarlo, hay formas muchos mejores: dentro de etiquetas html.

// function Saludar() {
//     const user = {
//         firtsName: 'ryan',
//         lastname: 'Jonson'
//     }
//     return <div>
//         <h1>{user.firtsName}</h1>
//         <h3>{user.lastname}</h3>
//     </div>
// }
// root.render(
//     <Saludar />
// )

//Estoy represetando los datos y coloandolos en una interfaz(En html)
//-----------------------------------------------------------------------------------
//Que pasa si queremos mostrar un true?

// function Saludar() {
//     const married = true
//     return (<div>
//         <h1>{married.toString()}</h1>
//     </div>);
// }
// root.render(
//     <Saludar />
// )

//Esto es para ver si es true o false, podes vonvertir los valores boleeanos en string : para convertir un booleano a string es toString y lo inicializas()
//-----------------------------------------------------------------------------------
//Tambien podemos interpretar dentro de esta funcion (Saludar()) otra funcion :o:

// function Saludar() {
//     function add(x, y) {
//         return x + y
//     }
//     return (<div>
//         <h1>{add(10, 30)}</h1>
//     </div>);
// }
// root.render(<div>
//     <Saludar />

//     <Saludar />

//     <Saludar />

//     <Saludar />
// </div>
// )

//Lo que ocurre en el segundo return es que va inicializar funcion add y vas a sumar
//valores numericos. Tambien podemos llamar al 40 varias veces. La etiqueta que
//contenga a todas las etiquetas puede ser otra: main, p, ul. Pero debe ser una
//etiqueta.
//-----------------------------------------------------------------------------------
//Lo que ocurre con esta forma es que creamos muchos div dentro de div. Hay veces en
//la que no queremos que este abierto dentro de una etiqueta. Hay veces en las que
//si quiero colocar varios elementos: Lo que nos dice react es que podemos usar una
//etiqueta especial que nos da JSX: Fragment, que basicamente quitarle el nombre de
//las etiquetas:

// function Saludar() {
//     function add(x, y) {
//         return x + y
//     }
//     return (<>
//         <h1>{add(10, 30)}</h1>
//     </>);
// }
// root.render(
//   <>
//     <Saludar />
//     <Saludar />
//     <Saludar />
//     <Saludar />
//     <UserCard title="Hola" />
//     <UserCard x="Cars" />
//     <UserCard y={30} />
//     <UserCard z={true} />
//     <UserCard a={[1, 2, 3]} />
//   </>
// );

//Fijarse en console en html ver que el div padre desaparecio. Entenderlo como un
//contenedor vacio.
//-----------------------------------------------------------------------------------
//Como podemos mostrar en pantalla lo que tenemos en 214 hasta 218 del archivo este?:
// root.render(
//     <>
//         <Saludar/>
//         <Saludar/>
//         <Saludar/>
//         <Saludar/>
//         <UserCard title="Hola Mundo" from="Argentina"/>
//         <UserCard title="Hola React" from="Fazt"/>
//         <UserCard title="Hola Mamá"/>
//         <UserCard title="Hola Papá"/>
//         <UserCard title="Hola Naiara" from="Mi corazon <3"/>
//     </>
//     )
//-----------------------------------------------------------------------------------
//¿Que datos podemos recibir de un props, que datos puede recibir un compomente a traves de props?: Basicamente seria cualquier tipo de dato de js.
// root.render(
//   <>
//     <UserCard
//       name="Ryan Ray"
//       amout={3000}
//       casado={true}
//       puntos={[99, 33.3, 22.2]}
//       address={{ street: "123 Main Street", city: "New York" }}
//       greet={function () {alert('Hello')} } //Lo veremos mas adelante. Podemos pasar una funcion y mostrarla en console. Pero por el momento solo eso.
//     />
//     <UserCard
//       name="Ryan Ray"
//       amout={3000}
//       casado={true}
//       puntos={[99, 33.3, 22.2]}
//       address={{ street: "123 Main Street", city: "New York" }}
//     />
//   </>
// );

//En address la primer llave es para pasarle un codigo que no sea un string y el segundo es el objeto. Tambien podemos reutilizar En el mismo root.render()
//-----------------------------------------------------------------------------------
// PropTypes y defaultProps ¿Como puedo asegurarme que realmente me van a pasar los valores los que sea? Si es un objeto por ejemplo?: con PropTypes (Añadir tipos de datos a los props para decirles que siempre quiero que me pases tales tipos de datos)pero para eso primero tenemos que instalar este codigo: npm install --save prop-types en git dash. Este comando funciona por que instalamos nodejs. Node js permite añadir mas modulos utilizando npm install y el nombre del modulo: prop-types,luego intalamos el codigo pero ahora dentro de nuestro proyecto: usar este: npm i prop-types.
// root.render(
//     <>
//         <Button text='Click me'/>
//         <Button text='Pay'/>
//         <Button text='Go to' name="El go to"/>
//         <Button text="Hello" name="Jose"/>
//     </>
//   )

//NOTA:Tener cuidado que los objetos dentro de una propiedad salta error, varios errores por lo que es recomendable no usar objetos, es decir las llaves, por el momento.
//-----------------------------------------------------------------------------------
// root.render(
//     <>
//         <TaskCard/>
//     </>
//   )
//-----------------------------------------------------------------------------------
// root.render(
//   <>
//     <TaskCard boleano={false} />
//   </>
// )
//-----------------------------------------------------------------------------------
// Hay dos tipos de componentes con los que podemos trabajar, con funciones y con clases. Que son las dos mas comunes.
// root.render(
//     <>
//       <Saludar/>
//     </>
//   )
//-----------------------------------------------------------------------------------
//[Event handlers o manejador de eventos] nos permite hacer algo cuando ocurre un determinado evento en una interfaz. Una interfaz es un medio común para que los objetos no relacionados se comuniquen entre sí. Ej botton, queremos que haga algo cuando le damos un evento como el clik. Los elementos de html, o los elementos de interfacez, no son solo para mostrar, sino para hacer algo. Cuando hagamos un click queremos hacer una determinada logica.

//Cada elemento de html tienen sus propios eventos. Y uno de los eventos que tiene muchos elementos es el evento onclick. Que es como decir que al hacer click en un el botton ocurra algo.
// root.render(
//     <>
//       <Button text="Presiona"/>
//       <input onChange={function() {
//         console.log('Veces que ah tocado una letra')
//       }}/>

//     </>
//   )

//El evento onChange Se ejecuta cuando voy tipeando en el input. El evento onCHnge tambien ofrece informacion acerca del evento, por lo general ofrece informacion a travez de un objeto de js. El parametro evento es el que muchos le ponen el (e).
// root.render(
//   <>
//     <Button text="Presiona" />
//     <input onChange={function (evento) {
//         console.log(evento);
//       }}
//     />
//   </>
// );
//Nos una enorme informacion del objeto evento. En la propiedad target donde esta la informacion en console. Podemos ver quien disparo el evento. El elemento input. Luego tenemos el valor que tiene el input en el momento en que se disparo el evento.

//Tambien podemos saber la propiedad del id, y hacer procedimientos con ella:
// root.render(
//     <>
//       <Button text="Presiona" />
//       <input id="Hola" onChange={function (evento) {
//           console.log(evento.target.id);
//         }}
//       />
//     </>
//   );
//Tambien en target puede ir el target.value.

//Otra cosa mas interesante, en ves de hacer en el 325 la function, podemos hacer lo que se conoce como funcion flecha!:
// root.render(
//     <>
//       <Button text="Presiona" />
//       <input id="Hola" onChange={(evento) => {
//           console.log(evento.target.value);
//         }}
//       />
//     </>
//   );
//Esta funcion puede estar fuera del imput. Con una constante y un nombre.

// const handleChange = (evento) => {
//     console.log(evento.target.value);
// }
// //Se suele escribir un nombre handleChange, Change es el nombre del evento. Y en root render, llamamos el nombre de la funcion.
// root.render(
//     <>
//       <Button text="Presiona" />
//       <input id="Hola" onChange={handleChange}/>
//     </>
//   );
// //
//-----------------------------------------------------------------------------------
//Hay otros tipos de eventos:
// root.render(
//     <>
//       <Button text="Presiona" />
//       <input id= "Hola" onDoubleClick={() => console.log("Doble Click")}/>
//     </>
//   );

//Podemos chusmear todos los on que hay
//-----------------------------------------------------------------------------------
//Hay otras etiquetas que puede tener eventos.
// root.render(
//     <>
//       <Button text="Presiona" />
//       <form onSubmit={() => console.log("Enviando datos del form")}>
//         <h1>Registro de usuario</h1>
//         <button>Enviar</button>
//       </form>
//     </>
//   );
//Con submit lo que se hace es enviar peticiones a un servidor, pero como por el momento no hay ninguno, refresca la pagina.  Esto en react no se hace de esta forma. Como podemos hacer para ver la informacion de submit en consola? = Ir a la parte de consola opciones guardar registro. (El logo de la rosca)
//----------------------------------------------------------------------------------
//¿Que forma podemos cancelar el envio entonces, teniendo en cuenta lo del 369?
// root.render(
//     <>
//       <Button text="Presiona" />
//       <form onSubmit={(evento) => {
//         evento.preventDefault()
//         alert('Enviado')
//       }}>
//         <h1>Registro de usuario</h1>
//         <button>Enviar</button>
//       </form>
//     </>
//   );
//Con preventDefault podemos quitar el comportamiento por defecto.
//.----------------------------------------------------------------------------------
//[Fetch Api] Sirve para traer datos.Muy rara vez vamos a tener los datos en el front end.Vamos a tener que pedirlo a un backend, a un servidor. Entonces vamos a ir a la pagina: JASONPlaceholder, lo que nos ofrece es poder tener datos de ejemplos.
// root.render(
//     <>
//         <Posts>
//         </Posts>
//     </>
// )
//-----------------------------------------------------------------------------------
// [Arreglos, Array en react (Vectores)]

// const users = [
//   {
//     id: 1,
//     name: "Pablo",
//     image: "https://robohash.org/HVF.png?set=set4&size=150x150",
//   },
//   {
//     id: 2,
//     name: "Naiara",
//     image: "https://robohash.org/MBM.png?set=set4&size=150x150",
//   },
// ];
// root.render(
//   <>
//     {users.map((users, i) => {
//       return (
//         <div key={i}>
//           <p>{users.id}</p>
//           <h1>{users.name}</h1>
//           <img src={users.image} />
//         </div>
//       );
//     })}
//   </>
// );
//En js ya hay metododos que nos permiten recorrer de forma sencilla: map, filter, reduce, forEach, muchas otras funciones que ya recorren de forma sencilla. Lo vamos a recorrer a traves de la funcion: map(). Con la funcion map tenemos que llamarlo, y adentro le ponemo la funcion, esta funcion espera el dato que va retornar.

//Como estamos ahora en jsx y no tan solo js podemos, no solo devolver strings y numeros, sino que tambien elementos de html [417].

//En cada recorrido de los objetos, recorremos sus propieades, y las retornamos en un solo elemento de html.

//[417] Cuando estamos trabajando con los elementos, o estamos recorriendo elementos, el que tiene que tener el key no es cualquier elemento si no el padre.

//Los metodos que mas vamos a utilizar son estos: map,filter que es para quitar un elemento de un arreglo, osea evitar que un arreglo ingrese a un nuevo arreglo generado. Tenemos find para buscar un elemento en un arreglo. Reduce. Sort para ordenar y asi.
//-----------------------------------------------------------------------------------
//Hooks básicos [Basicos]
// useState
// useEffect
// useContext
// Hooks adicionales [Optimizar codigo, ordenar codido, evitar consumir tanto recurso]
//Hooks adicionales
// useReducer
// useCallback
// useMemo
// useRef
// useImperativeHandle
// useLayoutEffect
// useDebugValue
// useDeferredValue
// useTransition
// useId
// Library Hooks
//Hooks librearias
// useSyncExternalStore
// useInsertionEffect
//-----------------------------------------------------------------------------------
//[useState]
// function Counter() {

//     let counter = 0

//     return (
//          <div>
//             <h1>Counter: {counter}</h1>

//             <button onClick={() => {
//                 counter = counter + 10
//             }}>Sumar</button>
//          </div>
//     )
// }
// root.render(
//   <>
//      <Counter/>
//   </>
// );
//Para incrementar el counter vamos a usar un boton.Si yo quiero que incremente de alguna forma, tengo que guardarle en una variable, que al darle en ese boton esa variable tiene que incrementar +1. Lo importante es que el valor tiene que cambiar.

//La forma que vemos desde 461 desde 470 es una forma que funciona en js pero no en en react, en react tenemos que usar un hook llamado useState. Que tenemos que activarla en import. Como llave al lado de react, 
//-----------------------------------------------------------------------------------
// function Counter() {

//     const [counter, setCounter] = useState()

//     console.log(state)
//Este State tiene dos elementos: un undefined y una funcion. Este state es una arreglo que viene con un elemento y luego al lado una funcion DENTRO.

//     let counter = 0

//     return (
//          <div>
//             <h1>Counter: {counter}</h1>

//             <button onClick={() => {
//                 counter = counter + 10
//             }}>Sumar</button>
//          </div>
//     )
// }
// root.render(
//   <>
//      <Counter/>
//   </>
// )
//Entonces para usar el el state hay que hacer:

// function Counter() {

//     const [counter, setCounter] = useState(5)

// //Este State tiene dos elementos: un undefined y una funcion. Este state es una arreglo que viene con un elemento y luego al lado una funcion DENTRO.
//     return (
//          <div>
//             <h1>Counter: {counter}</h1>

//             <button onClick={() => {
//                 setCounter(counter + 1)
//             }}>Sumar</button>

//             <button onClick={() => {
//                 setCounter(counter - 1)
//             }}>
//                 Restar
//             </button>

//             <button onClick={() => {
//                 setCounter(0)
//             }}>
//                 Reiniciar
//             </button>
//          </div>

//     )
// }
// root.render(
//   <>
//      <Counter/>
//   </>
// )
//Siempre tenemos que uar este useState cada vez que queremos cambiar un dato.
//-----------------------------------------------------------------------------------
//Como podemos usar el useState con input de html?
// function Counter() {

//     const [ mensaje, setMensaje] = useState('')

// //Este State tiene dos elementos: un undefined y una funcion. Este state es una arreglo que viene con un elemento y luego al lado una funcion DENTRO. La variable y la funcion tiene que tener el mismo nombre, solo que la funcion siempre tiene un set.

//     return (
//         <div>
//             <input onChange={e => setMensaje(e.target.value)}/>
//             <button onClick={() => {
//                 alert('El mensaje es: ' + mensaje)
//             }}>
//                 Save
//             </button>
//         </div>
//     )
// }
// root.render(
//   <>
//      <Counter/>
//   </>
// )
//-----------------------------------------------------------------------------------
//[UseEffect] Sirve cuando vamos a tener cambios en una interfaz. Vamos a ejecutar una funcion cada vez que el input [577] cambie el valor de mensaje. Primero se importa un useEffect

// function Counter() {

//     const [ mensaje, setMensaje] = useState('')

//Este State tiene dos elementos: un undefined y una funcion. Este state es una arreglo que viene con un elemento y luego al lado una funcion DENTRO. La variable y la funcion tiene que tener el mismo nombre, solo que la funcion siempre tiene un set.

    // useEffect(function () {
    //     console.log('Se cambio')
    // })
//Esta forma es bastante paja. Pero basicamente lo que va hacer useEffect es cambiar cada vez que haya un cambio en el coponente. Nos avisa cuantos cambios hubo. En el componente que lo contiene en este caso todo el counter. ¿Que pasa si quiero que el useEffect se use una sola vez cuando empieza el componente? Cuando el componente es creado: 
// useEffect(function () {
//     console.log('Se cambio')
// }, [])
//Tambien podemos hacer esto con funcion flecha.

// return (
//     <div>
//         <input onChange={e => setMensaje(e.target.value)}/>
//         <button onClick={() => {
//             alert('El mensaje es: ' + mensaje)
//         }}>
//             Save
//         </button>

//         <hr/>
//         <h1></h1>
//         <button>
//             Incrementar
//         </button>
//     </div>
// )
// }
// root.render(
// <>
//  <Counter/>
// </>
// )
//-----------------------------------------------------------------------------------
function Counter() {

    const [ mensaje, setMensaje] = useState('');
    const [counter, setCounter] = useState(0)

useEffect(function () {
    console.log('Se cambio')
}, [counter])
//CAMBIA cuando el valor counter incrementa. Se ejecuta efect cuando se incrementa el valor counter. Basicamente cambia la primera vez que se ejecuta y cuando se incrementa. Podemos pensarlo como funcion adicional que vigila el counter. Esto sirve cuando traemos datos de un backend y queremos asignarlo a una variable o mejor dicho a un estado de react, o cuando tenemos una interfaz que constantemente esta cambiando su estado y queremos que otra parte de la interfaz cambie tambien.

return (
    <div>
        <input onChange={e => setMensaje(e.target.value)}/>
        <button onClick={() => {
            alert('El mensaje es: ' + mensaje)
        }}>
            Save
        </button>

        <hr/>
        <h1>Counter: {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>
            Incrementar
        </button>
    </div>
)
}
root.render(
<>
 <Counter/>
</>
)
//-----------------------------------------------------------------------