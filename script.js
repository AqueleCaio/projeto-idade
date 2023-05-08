const ano_input = document.getElementById('iAno')
const masculino = document.getElementById('iop_masc')
const feminino = document.getElementById('iop_femin')
const botao_verificar = document.getElementById('verifica_idade')

let date_now = new Date()
let year_now = date_now.getFullYear()

botao_verificar.addEventListener('click', function(){
    console.log(ano_input)
})

