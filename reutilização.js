function diminuiTamanho(){ // diminui o tamanho
    if (tamanhoSeha > 1){
        //tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha --;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){ // aumenta o tamanho
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha + 1
        tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
     }

    function geraSenha(){ // gera o numero da senha
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }