let not = [];
function addNot(){
    let n = document.getElementById("n").value;     //pegar valor digitado
    let listar = document.createElement('li');      //criando uma lista
    not.push = (n.value);
    console.log(n);
    console.log(listar);
}
function mostNot(){
    let lista = document.createElement('li');      //criando uma lista
    let listagem = document.getElementById("lista"); //exibe a lista no html
    lista = not.push;
    listagem.appendChild(lista);
}