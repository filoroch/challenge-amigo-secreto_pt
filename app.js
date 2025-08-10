//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

//
function adicionarAmigo(){
    let input = document.getElementById('amigo');

    if (!input.value)
    {
        alert("Por favor, insira um nome.");
    } 
    else 
    {
        amigos.push(input.value);
    }
    input.value = '';
    atualizarListaAmigo();
    limparResultado();
}

function atualizarListaAmigo(){
    lista = limparListaAmigos()
    
    for (let i = 0; i < amigos.length; i++)
    {
        let element = document.createElement('li');
        element.innerHTML = amigos[i];
        lista.appendChild(element);
    }
    return lista;
}
function limparResultado(){
    let resultado = document.getElementById("resultado").innerHTML = "";
    return resultado;
    
}
function limparListaAmigos(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";
    return lista
}
function sortearAmigo(){
    if (!amigos){
        alert("Por favor, insira um nome.");
    } else {
        const indiceAlatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document
            .getElementById("resultado")
            .innerHTML = amigos[indiceAlatorio];
        limparListaAmigos();
    }
}