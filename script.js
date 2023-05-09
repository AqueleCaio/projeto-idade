let ano_input = document.getElementById('iAno')
let masculino = document.getElementById('iop_masc')
let feminino = document.getElementById('iop_femin')
let campo_idade = document.getElementById('pessoa_idade')
const botao_verificar = document.getElementById('verifica_idade')

let date_now = new Date()
let year_now = date_now.getFullYear()

let idade = year_now - ano_input

botao_verificar.addEventListener('click', function(){
    campo_idade.innerText = `A pessoa que nasceu em ${ano_input} tem ${idade} anos`
    
})