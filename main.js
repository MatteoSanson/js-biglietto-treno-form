'use strict';


genera.addEventListener('click', function() {
            const km = Number(document.getElementById("km").value);
            const eta = Number(document.getElementById("eta").value);

            const risultato = km + " km --- " + eta + " anni";
            document.getElementById("risultato").innerHTML = risultato;
  
  console.log ('tuoi km', km);
  console.log ('la tua età', eta);
  console.log ('risultato', risultato);
        });


// function genera() {
//     const km = Number(document.getElementById("km").value);
//     const eta = Number(document.getElementById("eta").value);

//     const risultato = km + " km --- " + eta + " anni";
//     document.getElementById("risultato").innerHTML = risultato;

//     console.log ("km viaggio: ", km);
//     console.log ("la tua età: ", eta);
// }