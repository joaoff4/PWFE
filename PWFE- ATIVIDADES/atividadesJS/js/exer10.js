function mT(){
    let n = document.getElementById("n").value;
    document.getElementById("tab").innerHTML = "<b>Tabuada do " + n + "</b>" +"<br>";
    for(let i = 0; i<10; i++){
        document.getElementById("tab").innerHTML += n + " x " + (i+1) + " = " + n*(i+1) + "<br>";
    }
}