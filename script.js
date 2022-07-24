function clickado(id){
    const opts = ['pedra', 'papel', 'tesoura']
    let pcOpt = opts[Math.floor(Math.random() * opts.length)]
    const resDiv = document.getElementById('res')
    const winnerDiv = document.getElementById('winner')
    

    if(id == 'pedra' && pcOpt == 'papel'){
        winnerDiv.innerHTML = ''
        winnerDiv.innerHTML += '<br>Vencedor: PC'
    } else if(id == 'papel' && pcOpt == 'tesoura'){
        winnerDiv.innerHTML = ''
        winnerDiv.innerHTML += '<br>Vencedor: PC'
    } else if(id == 'tesoura' && pcOpt == 'pedra'){
        winnerDiv.innerHTML = ''
        winnerDiv.innerHTML += '<br>Vencedor: PC'
    } else if(id == pcOpt){
        winnerDiv.innerHTML = ''
        winnerDiv.innerHTML += '<br>EMPATE!'
    }else{
        winnerDiv.innerHTML = ''
        winnerDiv.innerHTML += '<br>Vencedor: Você'
    }
    
    resDiv.innerHTML = 'RESULTADO <br>'
    resDiv.innerHTML += `<br><p>Você: ${id}</p>`
    resDiv.innerHTML += `<p>PC: ${pcOpt}<p/>`

}