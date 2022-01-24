let mj_getElementById_nome = document.getElementById("nome");

let mj_getElementById_km = document.getElementById("km");

let mj_getElementById_eta = document.getElementById("eta");

let mj_getElementById_genera = document.getElementById("genera");

mj_getElementById_genera.addEventListener("click",

    function(){
        
        let check = null; //check vale 1 se il controllo è ok, 0 altrimenti

        let identita = mj_getElementById_nome.value;
       
        let km = mj_getElementById_km.value;
            // controllo se i km inseriti sono validi
                km = parseInt(km);
                if(isNaN(km)){
                    check = 0;
                    alert(`I km inseriti non sono validi !!!`);
                }else{
                    check = 1;
                }
            // 

        let eta = mj_getElementById_eta.value;
        if (check == 1){
            
            //controllo se età inserità è corretta
            if(eta == "minorenne" || eta == "maggiorenne" || eta == "over_65"){
                check = 1;
            }else{
                check = 0;
                alert("L'età inserita non è accettata. Errore !!!");
            }
        }

        if(check == 1){
            console.log(`È stata preso in carica il calcolo del biglietto di ${identita} di età ${mj_getElementById_eta.value} per percorrere ${km} km`);
        
            // Definisco prezzo al km
            const PREZZO = 0.21;

            // Calcolo prezzo biglietto
            let tipo_biglietto = "Biglietto Standard";
            let prezzoBiglietto = km * PREZZO;
            prezzoBiglietto = prezzoBiglietto.toFixed(2);
            
            console.log(`Calcolato prezzo biglietto, costo di ${prezzoBiglietto} €`);
            
            // Sconto?
            if(eta == "minorenne"){
                prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto) * 20) / 100;
                prezzoBiglietto = prezzoBiglietto.toFixed(2);
                tipo_biglietto = "Biglietto Sconto 20%";
                
                console.log(`Il passeggero è minorenne, applico sconto 20%, totale scontato: ${prezzoBiglietto}`);
            
            } else if(eta == "over_65"){
                prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto) * 40) / 100;
                prezzoBiglietto = prezzoBiglietto.toFixed(2);
                tipo_biglietto = "Biglietto Sconto 40%";

                console.log(`Il passeggero ha più di 65 anni, applico sconto 40%, totale scontato: ${prezzoBiglietto}`);
            }

            let carrozza = Math.floor(Math.random()*9)+1;
            let codice_cp = Math.floor(Math.random()*9999)+90001;


            // append dei dati
            document.getElementById("identita").innerHTML = identita;
            document.getElementById("tipo_biglietto").innerHTML = tipo_biglietto;
            document.getElementById("carrozza").innerHTML = carrozza;
            document.getElementById("codice_cp").innerHTML = codice_cp;
            document.getElementById("prezzo").innerHTML = prezzoBiglietto + " €";

            // Aggiungo classe nella lista delle classi del <div> che contiene il biglietto con il prezzo calcolato
            let nascosto = document.querySelector(".hidden");
            nascosto.classList.add("d-block");
        } 
        //else con check == 0 non necessario perchè sarebbero già comparsi dei alert precedenti
    }

);


let mj_getElementById_annulla = document.getElementById("annulla");

mj_getElementById_annulla.addEventListener("click",

    function(){
        mj_getElementById_nome.value = "";
        mj_getElementById_km.value = "";
        mj_getElementById_eta.value = "";

        // Aggiungo classe nella lista delle classi del <div> che contiene il biglietto con il prezzo calcolato
        let nascosto = document.querySelector(".hidden");
        nascosto.classList.remove("d-block");
    }

);