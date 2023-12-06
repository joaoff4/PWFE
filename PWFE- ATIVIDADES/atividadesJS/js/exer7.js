let p = prompt("palavra: ");
function reverter(){
    return palavra.split("").reverse().join("");
}
alert("Palavra: " + palavra + "\n" + "Invertida: " + reverter(palavra));