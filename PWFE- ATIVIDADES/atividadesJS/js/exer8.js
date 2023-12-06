function verificarS(){
    let s = document.getElementById("s").value;
    let n = s;
    n == (/[0-9]/gm.test(s));
    let lM = s;
    lM == (/[A-Z]/gm.test(s));
    let lMn = lM;
    lMn == (/[a-z]/gm.test(s));
    let c = lMn;
    c == (/[!|@|#|$|%|^|&|*|(|)|-|_]/);
    if(s.length >= 8 && s.length <= 15 && n >= 1 && lM >=  2 && lMn >=  1 && c >=  1){
        document.write("Senha válida ");
    }else{
        document.write("|ERRO| A senha deve possuir entre 8-15 caracteres, possuir números (1 no mínimo), possuir letras minúsculas (no mínimo 1), possuir letras maíusculas (no mínimo 2), possuir símbolos (no mínimo 1) ");
    }
}