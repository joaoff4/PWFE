function categoriaAluno(){
    let n = document.getElementById("n").value;
    document.getElementById("mostInfo").innerHTML+= "Nome: " + n + "<br>" ;
    retornarTracos();
    let i = document.getElementById("i").value;
    if(i > 1 && i <= 12){
        document.getElementById("mostInfo").innerHTML+="<br>Categoria: Infantil";
    }else
    if(i  = 13 && i <= 18){
        document.getElementById("mostInfo").innerHTML+="<br>Categoria: Juvenil";
    }else
    if(i = 19 && i <= 59){
        document.getElementById("mostInfo").innerHTML+="<br>Categoria: Adulto";
    }else{
        document.getElementById("mostInfo").innerHTML+="<br>ERRO";
    }
}
function retornarTracos(){
    let n = document.getElementById("n").value;
    n = n.split(' ');
    for(let i=0; i <n.length; i++){
        let letras = n[i].split('');
        let tracos ="";
        tracos = tracos + " " + "-".repeat(letras.length);
        document.getElementById("mostInfo").innerHTML += tracos;
    }
}
