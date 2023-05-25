function limpaFormulario(){
        document.getElementById('rua').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('localidade').value = '';
        document.getElementById('uf').value = '';
        document.getElementById('ibge').value = '';
}

function meucallback(conteudo)
{
    if(!("erro" in conteudo))
    {
        //                    id do html                  id no json
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('localidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    }
}


function pesquisacep(valor)
{
    let cep = valor.replace(/\D/g,'')
    if(cep != "")
    {
        let validacep = /^[0-9]{8}$/;
        if(validacep.test(cep))
        {
            let script = document.createElement('script');
            script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=meucallback";
            document.body.appendChild(script);
        }else{
        window.alert("CEP inválido man");}
        limpaFormulario();
    }else{
        limpaFormulario();
        alert("CEP não existe man");
    }
}
