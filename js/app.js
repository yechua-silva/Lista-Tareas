//VAARIBLES
const formulario = document.querySelector('#formulario');
const listaTwets = document.querySelector('#lista-tweets');
//donde se agregaran las tareas o tweets
let tweets = [];
//FUNCIONES
//agrega los tweets
const agregarTweet = e => {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value

    //validacion
    if (tweet === '') {
        mostrarError('Una tarea no puede estar vacia')
        return;//evita que se ejecuten mas lineas de codigo
    }

    //crear objeto para identificar mesaje mediante id
    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }

    //Añadir al array de tweet
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    //Una vez agregado, crear HTML
    crearHTML();

    //Reiniciar formulario
    formulario.reset();
}

//mostrar mensaje de error
const mostrarError = (error) => {
    const mensajeError = document.createElement('P')
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}

//Muestra un listado de los tweets
const crearHTML = () => {
    //limpiar HTML
    limpiarHTML();

    //verificamos si tweets posee algo
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            //Agregar un boton para eliminar
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X'

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear HTML
            const li = document.createElement('LI');

            //añadir el texto
            li.innerText = tweet.texto

            //Asignar el boton
            li.appendChild(btnEliminar);

            //insetar en el HTML
            listaTwets.appendChild(li);
        })
    }
    sincronizarStorage();
}

//Agregar los tweets actuales al storage
const sincronizarStorage = () => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
};

//limpiar HTML
const limpiarHTML = () => {
    while(listaTwets.firstChild){
        listaTwets.removeChild(listaTwets.firstChild);
    }
}

//borara tweets
const borrarTweet = id => {
    //deja todos menos el del id que le pasamos
    tweets = tweets.filter( tweet => tweet.id !== id)
    crearHTML();
};
//EVENTS LISTENERS
const eventListener = () => {
    //formulario escucha cuando se hace el submit, cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        //busca el arreglo de twwets, en el caso que lo encuentre vacio, como lo transforma en string quedaria como null, por lo que no se podria agregar al HTML, por que funciona con forEach, que recorre arreglos. por eso se coloca el || [], para que en caso de que este vacio devuelva un arrreglo vacio
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });

}
eventListener();