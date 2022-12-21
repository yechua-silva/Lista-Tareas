//VAARIBLES
const formulario = document.querySelector('#formulario');
const listaTwets = document.querySelector('#lista-tweets');
//donde se agregaran las tareas o tweets
const tweets = [];
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
//EVENTS LISTENERS
const eventListener = () => {
    //formulario escucha cuando se hace el submit
    formulario.addEventListener('submit', agregarTweet)

}
eventListener();