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
    atualizarListaAmigo()
}

function atualizarListaAmigo(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++){
        let element = document.createElement('li')
        element.innerHTML = amigos[i];
        lista.appendChild(element);
    }
    return lista;
}