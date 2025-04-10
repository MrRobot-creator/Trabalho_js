const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) { 
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
    }


form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

    const valorDeposito = document.getElementById ('valordeposito');
    const numeroContaBenefeciaro = document.getElementById('numeroconta');
    const nomeBenefeciario = document.getElementById('nomebenefeciario');
    const mensagemSucesso = `Montante de valor: <b>${valorDeposito.value}</b> depositando para o cliente: ${nomeBenefeciario.value} - conta: <b>${numeroContaBenefeciaro.value}</b>`;


    formEvalido = validaNome(nomeBenefeciario.value)
    if (formEvalido) {  
    document.querySelector('success-message').innerHTML = mensagemSucesso; 

    nomeBenefeciario.value = '';
    numeroContaBenefeciaro.value = '';
    valorDeposito.value = '';
    mensagemSucesso.value = '';

} else { 
    alert("o nome não esta completo");
    }
})

console.log(form);
