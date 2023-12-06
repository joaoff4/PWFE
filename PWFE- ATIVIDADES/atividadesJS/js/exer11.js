function p(){
    let v = parseFloat(document.getElementById("v").value);
    document.getElementById("div").innerHTML += "<b>Opções de Pagamento:</b>" + "<br>";
    for(let i = 0; i<10; i++){
        let d = v/(i+1);
        let a = d.toFixed(2);
        document.getElementById("div").innerHTML += (i+1) + "x de R$: " + a + "<br>";
    }
}