function contar() {
    let inicio = document.getElementById('start')
    let fim = document.getElementById('end')
    let passo = document.getElementById('pass')
    var res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados no formulário!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO: 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            } 
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerText += ` ${c}`
            } 
        }     
    }
}