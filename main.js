const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) { 
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
    }


form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

    const valorDeposito = document.getElementById ('Valordeposito');
    const numeroContaBenefeciaro = document.getElementById('numeroconta');
    const nomeBenefeciario = document.getElementById('nomeBenefeciario');
    const mensagemSucesso = `Montante de valor: <b>${Valordeposito.value}</b> depositando para o cliente: ${nomeBenefeciario.value} - conta: <b>${numerocontaBenefeciaro.value}</b>`;


    formEvalido = validaNome(nomeBenefeciario.value)
    if (formEvalido) {  
    document.querySelector('success-message').innerHTML = mensagemSucesso; 

    nomeBenefeciario.value = '';
    numerocontaBenefeciaro.value = '';
    Valordeposito.value = '';
    mensagemSucesso.value = '';

} else { 
    alert("o nome não esta completo");
    }
})

console.log(form);
