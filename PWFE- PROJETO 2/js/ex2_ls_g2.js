let not = [];
function addNot(){
    not = document.getElementById("n").value;
    console.log(not);
    localStorage.getItem(not);
}
function mostNot(){
    document.getElementById("n").value;
    let lista = document.createElement('li');      //criando uma lista
    let listagem = document.getElementById("lista"); //exibe a lista no html
    lista = not;
    listagem.appendChild(lista);
}