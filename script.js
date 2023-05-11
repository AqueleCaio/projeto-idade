let ano_input = document.getElementById('iAno')
let masculino = document.getElementById('iop_masc')
let feminino = document.getElementById('iop_femin')
let campo_idade = document.getElementById('idade_pessoa')
let box_imagem = document.getElementById('referent_image')

const botao_verificar = document.getElementById('verifica_idade')

let date_now = new Date()
let year_now = date_now.getFullYear()

const imagem_garotos = [
    'imagens/garoto-1.jpg',
    'imagens/garoto-2.jpg'
]

const imagem_garotas = [
    'imagens/garota-1.jpg',
    'imagens/garota-2.jpg'
]

const mudaImagem = (idade) => {
    //box_imagem.style.display = 'block'
    let random_index = Math.floor(Math.random() * imagem_garotos.length)

    if(idade > 0 && idade < 10 && masculino.checked){
        return box_imagem.setAttribute('src', imagem_garotos[random_index])
    }

    else if(idade > 0 && idade < 10 && feminino.checked){
        return box_imagem.setAttribute('src', imagem_garotas[random_index])
    }
}

const mudaTexto = () => {
    const idade = year_now - ano_input.value

    mudaImagem(idade)

    if(ano_input.value > year_now || idade <= 0){
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