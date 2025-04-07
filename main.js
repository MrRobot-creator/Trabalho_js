const form = document.getElementById('form-deposito');

form.addEventListener('submit',function(e) {
    let formEvalido = false;
    e.preventDefault();
    const mensagemSucesso = `Montante de valor: ${valorDeposito.value} depositando para o cliente: ${nomeBenefeciario.value} - conta: ${numeroContaBenefeciaro.value}`;
    const valorDeposito = document.getElementById ('valor-deposito');
    const numeroContaBenefeciaro = document.getElementById('numero-conta');
    const nomeBenefeciario = document.getElementById('nome-benefeciario');
    formEvalido = validaNome(nomeBenefeciario.value)
    if (formEvalido) { 
    alert(mensagemSucesso);

    nomeBenefeciario.value = '';
    numeroContaBenefeciaro.value = '';
    valorDeposito.value = '';

    } else { 
    alert("o nome não esta completo");
    }
})

function validaNome(nomeCompleto) { 
    const nomeComoArray = nomeCompleto.trim().split(/\s+/);
    return nomeComoArray.length >= 2;
}
console.log(form);
