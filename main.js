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

    
    const risultatoHTML = `
        <p>Nome e Cognome: ${nomeCognome}</p>
        <p>Kilometri: ${km}</p>
        <p>Fascia d'età: ${fasciaEta}</p>
    `;

    document.getElementById('risultato').innerHTML = risultatoHTML;
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