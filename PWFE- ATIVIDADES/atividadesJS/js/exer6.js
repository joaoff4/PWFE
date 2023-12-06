function refbib(){
    //receber valor input
    let n = document.getElementById("n").value;
    //separar as palavras em índices
    let ind = n.split(' ');
    let uP = ind[2];    //selecionando o último índice    
    uP = uP.toUpperCase();  //deixando a palavra selecionada maiúscula
    let pP = ind[0];
    let lPP = pP.charAt(0);  //selecionando primeira letra da primeira palavra
    let sP = ind[1];
    let lSP = sP.charAt(0);  //selecionando primeira letra da segunda palavra
    document.getElementById("exibir").innerHTML="<b>Citação Bibliográfica: </b>" + uP+ ", " + lPP+ "." 
        + lSP + ".";   //exibir no html
}