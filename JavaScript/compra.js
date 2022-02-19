
var data = new Date()
var ano = data.getFullYear()
var hoje = document.getElementById('data')
var identidade = document.getElementById('identdd')
var idade = document.getElementById('idade')
var peso = document.getElementById('peso')
var preco = document.getElementById('preco')
var sex = document.getElementsByName('radsex')
var vend = document.getElementById('vend')
var res = document.querySelector('div.log')


function cadastrar(){
    if(hoje.value.length == 0 || hoje.value > ano){
        window.alert('[ERRO] verifique a Data')
    }else{
        var genero = ''
        if (sex[0].checked){
            genero = 'Macho'
        }else if (sex[1].checked){
            genero = 'Femea'
        }
        res.style.marginTop = '30px'
        res.style.textAlign = 'center'

        res.innerHTML = `Data : ${hoje.value} <br>Identificação: ${identidade.value} <br>Idade :${idade.value} <br>Peso :${peso.value} <br>Preço :${preco.value} <br>Sexo :${genero} <br>Vendedor :${vend.value}`
    }
    
}
function vender(){
    if(hoje.value.length == 0 || hoje.value > ano){
        window.alert('[ERRO] verifique a data')
    }else{

    }
}