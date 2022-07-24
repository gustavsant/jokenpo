const opts = document.querySelectorAll('.escolha')

const resDiv = document.getElementById('res')
const winnerDiv = document.getElementById('winner')


let playerEscolha
let pcEscolha
opts.forEach(escolha => escolha.addEventListener('click',(e) => {
    playerEscolha = e.target.id
    EscolhaDoPC()
    resDiv.innerHTML = `${playerEscolha} <br>${pcEscolha}`
    GerarResultados()
    console.log('player' + playerEscolha)
}))

function GerarResultados(){
    if(playerEscolha != undefined && pcEscolha != undefined){
        if(playerEscolha == 'pedra' && pcEscolha == 'papel'){
            writer('', '<br>Vencedor: PC')
        } else if(playerEscolha == 'papel' && pcEscolha == 'tesoura'){
            writer('', '<br>Vencedor: PC')
        } else if(playerEscolha == 'tesoura' && pcEscolha == 'pedra'){
            writer('', '<br>Vencedor: PC')
        } else if(playerEscolha == pcEscolha){
            writer('', '<br>EMPATE')
        }else{
            writer('', '<br>Vencedor: Você')
        }
    }
}

function EscolhaDoPC(){
    const ops = ['pedra', 'papel', 'tesoura']
    pcEscolha = ops[Math.floor(Math.random() * ops.length)]
}

function writer(blank, result){
    winnerDiv.innerHTML = ''
    winnerDiv.innerHTML += result
}
