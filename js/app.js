//VAARIBLES
const formulario = document.querySelector('#formulario');
const listaTwets = document.querySelector('#lista-tweets');
//donde se agregaran las tareas o tweets
const tweets = [];
//FUNCIONES
//agrega los tweets
const agregarTweet = e => {
    e.preventDefault();
    console.log('agregando tweet');
}
//EVENTS LISTENERS
const eventListener = () => {
    //formulario escucha cuando se hace el submit
    formulario.addEventListener('submit', agregarTweet)
}
eventListener();