


const prezzoBiglieto = 0.21;

let sconto18 = 0.8;
let sconto65 = 0.6;

let prezzoTotale;

const nomePassaggeroField = document.getElementById(`nome_cognome`)
const kmField = document.getElementById(`km_percorsi`)
const form = document.querySelector(`form`)

const nomePassaggero = document.getElementById(`nome_cognome`)
const km = document.getElementById(`km_percorsi`)


form.addEventListener( `click`, function(){
    
    nomePassaggero.innerHTML = nomePassaggero.value
    km.innerHTML = kmField.value
})




// if( eta < minorenne ){
//     prezzoTotale = (prezzoBiglieto * km) * sconto18
    

// }else if( eta > maggiorenne){
//     prezzoTotale = (prezzoBiglieto * km) * sconto65

// }else {
//     prezzoTotale = (prezzoBiglieto * km)
// }


