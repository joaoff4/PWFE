function parimp(){
    let x = document.getElementById("x").value;
    if(x%2 == 0){
        alert(x + " é par");
    }else if(x%2 > 0){
        alert(x + " é ímpar");
    }
    else{
        alert(" erro");
    }
}