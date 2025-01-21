const btn = document.getElementById(`bottone`)
const prezzo = 0.21

btn.addEventListener(`click`, function(){
    
    
    const nome = document.getElementById(`nome`).value
    const km = parseInt(document.getElementById(`km`).value)

    
    const eta = document.getElementById(`fascia-eta`).value

    
    
    const passeggero = document.getElementById(`passeggero`)

    passeggero.innerHTML = nome
    
    const offerta = document.getElementById(`offerta`)
    const carroza = document.getElementById(`carroza`)
    const codice = document.getElementById(`codice`)
    const prezzo = document.getElementById(`prezzo`)
    console.log(eta)

    if( eta == "maggiorenne"){
        offerta.innerHTML = " Biglietto standart"
        prezzo.innerHTML = (prezzo * km).toFixed(2)
        console.log(prezzo, offerta)
    }else if ( eta == "minorenne"){
        offerta.innerHTML = "Bigletto ridotto"
        prezzo.innerHTML = ((prezzo * km) * 0.80).toFixed(2)
    }else {
        offerta.innerHTML = " Over 65 anni"
        prezzo.innerHTML = (( prezzo * km) * 0.60).toFixed(2)
    }

    carroza.innerHTML = randomNumber(1,99)
    codice.innerHTML = randomNumber(1111,9999)

})

function randomNumber(min,max){
    return Math.floor(Math.random() * max) + min;
}