function limpaForm(){
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
}
function atualizaCampos(conteudo){
    if((!("erro") in conteudo)){
        document.getElementById('rua').value=(conteudo.rua);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.cidade);
        document.getElementById('estado').value=(conteudo.estado);
    }else{
        limpaForm();
        alert("CEP não encontrado");
    }
}
function pesquisaCep(){
    //variável cep recebe apenas valores decimais(inteiros)
    var cep = valor.replace(/\D/g,'');
    //condição de validação
    if(cep != ""){
        var validacep = /^[0-9]{8}$/;
        //valida o formado do CEP
        if(validacep.test(cep)){
            document.getElementById('rua').value="carregando";
            document.getElementById('bairro').value="carregando";
            document.getElementById('cidade').value="carregando";
            document.getElementById('estado').value="carregando";
    var elemento = document.createElement('script');
    elemento.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=atualizaCampos';
    //insere script no documento e carrega seu conteúdo 
    document.body.appendChild(elemento);
    }else{
        limpaForm();
        alert("Formato do CEP inválido")
    }}else{
        limpaForm();
    }
}