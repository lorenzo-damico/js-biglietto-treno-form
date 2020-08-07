var genera = document.getElementById("genera");

genera.addEventListener("click",
  function () {
    // 1. Creo una variabile con il nome immesso dall'utente
    var nome = document.getElementById("nome_cognome").value;
    console.log(nome);

    // 2. Creo una variabile con i km immessi dall'utente
    var distanza = document.getElementById("km").value;
    console.log(distanza);

    // 3. Creo una variabile con la fascia di età scelta dall'utente
    var eta = document.getElementById("eta").value;
    console.log(eta);

    // 4. Calcolo il prezzo base del biglietto
    var prezzoBiglietto = distanza * 0.21;

    // 5. Scrivo la condizione per la quale si ottengono sconti e stampo nell'html il tipo di offerta
    if (eta == "minorenne") {
      prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 20) / 100)
      document.getElementById("offerta").innerHTML = "Sconto " + eta;
    } else if (eta == "over 65") {
      prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 40) / 100)
      document.getElementById("offerta").innerHTML = "Sconto " + eta;
    } else {
      document.getElementById("offerta").innerHTML = eta;
    }
    console.log(prezzoBiglietto);

    // 6. Calcolo un valore tra 1 e 9 per la carrozza
    var carrozza = Math.floor(Math.random() * 9) + 1;
    console.log(carrozza);

    // 7. Calcolo un numero tra 90000 e 100000 per il codice CP
    var codice = Math.floor(Math.random() * 10000) + 90000;
    console.log(codice);

    // 8. Vado a stampare i dati restanti nell'html
    if (isNaN(nome) && distanza >= 1) {
      document.getElementById("nome_passeggero").innerHTML = nome;
      document.getElementById("carrozza").innerHTML = carrozza;
      document.getElementById("codice").innerHTML = codice;
      document.getElementById("costo").innerHTML = prezzoBiglietto.toFixed(2) + "&euro;";
      // 9. Aggiungo la classe show al contenitore del biglietto per renderlo visibile
      document.getElementById("ticket_container").classList.add("show");
    } else {
      alert("Dati invalidi");
    }
  }
);

// 10. Creo una funzione sul bottone annulla per ripristinare i valori e nascondere il pannello
var annulla = document.getElementById("annulla");

annulla.addEventListener("click",
  function () {
    document.getElementById("ticket_container").classList.remove("show");
    document.getElementById("nome_cognome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";
  }
);
