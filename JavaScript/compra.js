
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
        let diaComp = hoje.value
        let numeroId = Number(identidade.value)
        let anoIdade = Number(idade.value)
        let pesa = Number(peso.value)
        let valor = Number(preco.value)
        let genero = ''
        if (sex[0].checked){
            genero = 'Macho'
        }else if (sex[1].checked){
            genero = 'Femea'
        }
        let venddr = vend.value

        res.style.marginTop = '30px'
        res.style.textAlign = 'center'

        res.innerHTML = `Data : ${diaComp} <br>Identificação: ${numeroId} <br>Idade :${anoIdade} <br>Peso :${pesa} <br>Preço :${valor} <br>Sexo :${genero} <br>Vendedor :${venddr}`
    }
    
}
function vender(){
    if(hoje.value.length == 0 || hoje.value > ano){
        window.alert('[ERRO] verifique a data')
    }else{

    }
}