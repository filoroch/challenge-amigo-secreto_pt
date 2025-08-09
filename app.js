//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

//
function adicionarAmigo(){
    let input = document.getElementById('amigo');

    if (!input.value){
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(input.value);
    }
    input.value = '';
    console.table(amigos);
}

function atualizarListaAmigo(){
    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo = innerHTML = "";
    
    for (let i; i < amigos.length; i++){
        let element = document.createElement('li')
        element.innerHTML = amigos[i];
        listaAmigo.appendChild(element);
    }
}