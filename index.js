'use strict'

async function pesquisarCep(cep) {
    //os dados só entrando pelo parametro e a saída somente pelo retorno
    const url = `https://corsproxy.io/?url=https://cdn.apicep.com/file/apicep/${cep}.json`;


    const response = await fetch(url);
    const data = await response.json();
    //testando o link
    // console.log(url);
   return data;
}

//target pega o evento que está acontecendo e preenche o campo
async function preencherCampos({target}) {
    
    const infoCep = await pesquisarCep(target.value);
    document.getElementById('endereco').value = infoCep.address;
    document.getElementById('bairro').value = infoCep.district;
    document.getElementById('cidade').value = infoCep.city;
    document.getElementById('estado').value = infoCep.state;

}

//addEventListener serve para acionar um ouvinte
document.getElementById('cep').addEventListener('focusout', preencherCampos);
document.getElementById('btn').addEventListener('click', preencherCampos);