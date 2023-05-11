let ano_input = document.getElementById('iAno')
let masculino = document.getElementById('iop_masc')
let feminino = document.getElementById('iop_femin')
let campo_idade = document.getElementById('idade_pessoa')
let box_imagem = document.getElementById('referent_image')

const botao_verificar = document.getElementById('verifica_idade')

let date_now = new Date()
let year_now = date_now.getFullYear()

const imagem_criança = [
    box_imagem.setAttribute('src', 'imagens/garoto-1.jpg'),
    box_imagem.setAttribute('src', 'imagens/garoto-2.jpg')
]

function mudaImagem(idade){
    if(idade > 1 && idade < 10){
        let imagemAleatória = (Math.random() * imagem_criança.length)
        return imagem_criança[imagemAleatória]
    }
}

const mudaTexto = () => {
    const idade = year_now - ano_input.value

    mudaImagem(idade)

    if(ano_input.value > year_now || idade < 0){
        campo_idade.innerHTML = `...`
        window.alert('Ano inválido')
    } 
    
    if(masculino.checked == true){
        campo_idade.innerHTML = `A pessoa que nasceu em ${ano_input.value} é um homem de ${idade} anos`
    } else {
        campo_idade.innerHTML = `A pessoa que nasceu em ${ano_input.value} é um é uma mulher de ${idade} anos`
    }
}

botao_verificar.addEventListener('click', mudaTexto)