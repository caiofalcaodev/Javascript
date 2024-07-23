var agora = new Date()
var hora = agora.getHours()
console.log(`Agora exatamente são ${hora}h.`)
if (hora <= 4) {
    console.log('Boa madrugada!')
} else if (hora <= 11) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
