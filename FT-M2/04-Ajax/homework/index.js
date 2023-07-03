//declaramos las variables que contienen la url y la unorderlist
const url = "http://localhost:5000/amigos";
const ulLista = document.getElementById("lista");

//creamos una constante con una collback que crea un li con el nombre de cada amigo
const crearLiamigos = (amigo) => {
    const li = document.createElement("li");
    li.innerHTML = amigo.name + " X ";
    ulLista.appendChild(li);
};

// creamos una variable que recibe un array de amigos
const mostrarAmigos = (amigos) => {
    amigos.forEach(crearLiamigos);
};

// creamos la variable obtenerAmigos que hace un get a la url y recibe la funcion mostrarAmigos
const obtenerAmigos = () => {
    //* $.get(url,callback) esta es al fromula de get de ajax
    // 1: url donde vamos a hacer las peticiones 
    // 2: callback que ira con los parametros, que a su vez son variables declaradas donde se guardara la informacion que nos llega de la peticion get y con ellas trabajaremos para mostrar la imformacion ene l html;
    $.get(`${url}`, mostrarAmigos);
};

// creamos una constante que recibe el boton y le añadimos un evento click que llama a la funcion obtenerAmigos mediante name
const boton = document.getElementById("boton");
boton.addEventListener("click", obtenerAmigos);


const tinputID= document.getElementById("input");
const spanconelamigo= document.getElementById("amigo");

const buscarAmigosID = (id) => {
    //creamos la url del amigo que seria asi: http://localhost:5000/amigos/1 por eso añadimos la / y despues el id que sera pasado por parametro y eso nos da la url completa donde vamso a ahecr la busqueda
    const urlAmigo = `${url}/${id}`;
    //ahora hacemos un get a la urlAmigo y creamos una collback que recibe el amigo y añadimos el nombre del amigo al span
    $.get(urlAmigo, (amigo) => {
        spanconelamigo.innerHTML = ""; //limpiamos el span
        spanconelamigo.innerHTML = amigo.name; //añadimos el nombre del amigo 
    });
};
// creamos la variable btnBuscar
const btnBuscar= document.getElementById("search");
btnBuscar.addEventListener("click",()=>{
    const id = tinputID.value;
    buscarAmigosID(id);
});

const inputborrarporid= document.getElementById("inputDelete");
const spanMensajeDeleted= document.getElementById("success");
const btnBorrar= document.getElementById("delete");


const borrarAmigo = () => {
$.ajax({
    url: `${url}/${inputborrarporid.value}`,
    type: "DELETE",
    success: function (borrado) {
        console.log("hola");
        spanMensajeDeleted.innerHTML = "Amigo borrado con exito";
    }
})
};
btnBorrar.addEventListener("click",borrarAmigo);