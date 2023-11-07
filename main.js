'use strict';

const genera = document.getElementById('genera');

genera.addEventListener('click', function() {
    const nomeCognome = document.getElementById('nomeCognome').value;

    const km = Number(document.getElementById('km').value);

    const select = document.getElementById('floatingSelectGrid');
    const fasciaEta = select.options[select.selectedIndex].text;

    console.log('Nome e Cognome:', nomeCognome);
    console.log('Km:', km.toFixed(2));
    console.log("Fascia d'età:", fasciaEta);

    const rispNomeCognome = nomeCognome;

    document.querySelector('.container.visually-hidden').classList.remove('visually-hidden');
    document.getElementById('rispNomeCognome').innerHTML = rispNomeCognome;


    let offertaScelta = '';

    if (fasciaEta === 'Minorenne') {
        offertaScelta = 'Offerta Junior';
    } else if (fasciaEta === 'Maggiorenne') {
        offertaScelta = 'Offerta Silver';
    } else if (fasciaEta === 'Over 65') {
        offertaScelta = 'Offerta Gold';
    }
    
    console.log('Offerta scelta:', offertaScelta);
    
    const offertaEta = document.querySelector('.offertaEta');
    offertaEta.textContent = offertaScelta;

    let numeroCarrozza = Math.floor(Math.random() * 20) + 1;
    console.log('Numero Carrozza:', numeroCarrozza);
    document.getElementById('numCarrozza').innerHTML = numeroCarrozza;

    // variabili sconto
    const scontoMin = 20;
    const scontoOver = 40;

    // variabile prezzokm
    const prezzoKm = 0.21;
       
    let prezzoBiglietto = km * prezzoKm;
        
        
});




// genera.addEventListener('click', 
//     function() {
//         const km = Number(document.getElementById("km").value);
//         const eta = Number(document.getElementById("eta").value);

//         // variabili sconto
//         const scontoMin = 20;
//         const scontoOver = 40;

//         // variabile prezzokm 
//         const prezzoKm = 0.21;
       
//         let prezzoBiglietto = km * prezzoKm;
        
        
//         if(eta < 18){
//             console.log ("Hai uno sconto under 18 anni");
//             const scontoBiglietto = ((prezzoBiglietto / 100) * scontoMin);
//             prezzoBiglietto -= scontoBiglietto;
                
//         }else if (eta >= 65){
//             console.log ("Hai uno sconto over 65 anni");
//             const scontoBiglietto = ((prezzoBiglietto / 100) * scontoOver);
//             prezzoBiglietto -= scontoBiglietto;
//         }else {
//             console.log ("Non hai sconti età");
//             }
            
        
//         const risultato = "Il prezzo del tuo biglietto è " + prezzoBiglietto.toFixed(2) + " €";

//         console.log (risultato);
        
//         document.getElementById("risultato").innerHTML = risultato;
        
// });