function adicionar(){
    var n = prompt("Insira o nome do cotato:");
    var e = prompt("Insira o e-mail do contato:");
    var detalhar =document.createElement('li');
    detalhar.innerHTML = ("Nome: " + n + " || " + "E-mail: " + e);
    var listagem = document.getElementById("lista");
    listagem.appendChild(detalhar);
}