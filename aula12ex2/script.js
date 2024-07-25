function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    //Determinando variaveis 
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
    //aplicando uma função para caso não exista digitos no formulario.
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', 'imagens/childboy.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/youngman.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/oldman.png')
            }
            //função para caso seja masculino atribuindo em conjunto com a idade
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', 'imagens/girlchild.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/beautifulgirl.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/oldwoman.png')
            }
            //função para caso seja feminino atribuindo em conjunto com a idade
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos!</p>`
        res.appendChild(img)
        
        //resultado para a pesquisa
    }
}