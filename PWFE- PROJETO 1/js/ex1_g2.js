function velocidade(){
    let mx = 80;    //velocidade máxima
    let l = 96;     //velocidade 20% maior do que o permitido
    let m = 104;    //velocidade 30% maior do que o permitido
    let p = 112;    //velocidade 40% maior do que o permitido
    let v = document.getElementById("v").value;
    if(v >= 1 && v <= mx){      //condição p/ velocidade permitida
        document.getElementById("vP").innerHTML = v + "km/h: " +"Velocidade Permitida";
    }else if(v > mx && v <= l ){     //condição p/ multa leve
        document.getElementById("mL").innerHTML = v + "km/h: " +"Multa Leve";
    }else if(v > mx && v>=l && v <= m){     //condição p/ multa média
        document.getElementById("mM").innerHTML = v + "km/h: " +"Multa Média";
    }else if(v > mx && v>=m || v >=p){      //condição p/ multa pesada
        document.getElementById("mP").innerHTML = v + "km/h: " +"Multa Pesada";
    }else{
        document.getElementById("vI").innerHTML = v + "km/h: " +"Velocidade Inválida";
    }
}