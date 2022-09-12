// export const Posts = () => {
//   return (
//     <button
//       onClick={() => {
//         alert("Obteniendo datos");
//       }}
//     >
//       Traer datos
//     </button>
//   );
// };

//Podemos crear una constante y asignarle una funcion flecha tambien. En el 5 podemos ver que en esa linea de codigo vamos a pedir datos, solo que aqui pusimos de ejemplo el alert. Y por eso podemos appi ass como localhestorag,sesion estorage, como camvas, o como notificaciones, todas las appi as que nos ofrece el navegador (Google, Brave, etc), entonces podemos pedir informacion del navegdor, y las podemos pedir con una app as llamada fetch, lo cual nos permite traer datos del navegador.

// export const Posts = () => {
//   return (
//     <button
//       onClick={() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//           .then((response) => response.json())
//           .then((data) => console.log(data))
//           .catch((error) => console.error(error));
//       }}
//     >
//       Traer datos
//     </button>
//   );
// };
//Para poder guardar estos datos faltan otros conceptos, pero por el momento de esta forma los podemos traer. Luego supongamos que hay un error podemos aplicar un catch. Basicamente le decimos que nos muestre el error por consola. 19 hasta 22 de la parte de este archivo en lineas de codigo, son los que se conoce como promesas, esta es una forma de solicitar datos, y podemos manipularlos. Pero hay otra forma mas facil que es con async y await.
//-----------------------------------------------------------------------------------
import { FaAmazon } from 'react-icons/fa'

//importa /fa y si quieres la libreria Font Awesona (Todo esto en la pagina de react icons.)

export const Posts = () => {
    return (
      <button
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        }}
      >
        <FaAmazon/>
        Traer datos
      </button>
    );
  };
