
    let countPet = 0, countMol = 0, countPsa = 0, countXar = 0; 

    const score = {
        Νίκες:0,
        Ήττες:0,
        Ισοπαλίες:0
    };

    function apotelesmata(playerMove){
        if (playerMove === 'Πέτρα'){
            countPet++;
            document.getElementById("countPet").innerHTML = countPet;
        }
        else if(playerMove === 'Μολύβι'){
            countMol++;
            document.getElementById("countMol").innerHTML = countMol;
        }
        else if(playerMove === 'Ψαλίδι'){
            countPsa++;
            document.getElementById("countPsa").innerHTML = countPsa;
        }
        else if (playerMove === "Χαρτί"){
            countXar++;
            document.getElementById("countXar").innerHTML = countXar;
        }
    }


function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    apotelesmata(playerMove);

    if(playerMove === 'Πέτρα'){
        if (computerMove === 'Πέτρα'){
            result = 'Ισοπαλία';
        }else if (computerMove === 'Μολύβι'){
            result = 'Κέρδισες';
        }else if (computerMove === 'Ψαλίδι'){
            result = 'Κέρδισες';
        }else if (computerMove === 'Χαρτί'){
            result = 'Έχασες';
        }
    }else if(playerMove === 'Μολύβι'){
        if (computerMove === 'Πέτρα'){
            result = 'Έχασες';
        }else if (computerMove === 'Μολύβι'){
            result = 'Ισοπαλία';
        }else if (computerMove === 'Ψαλίδι'){
            result = 'Έχασες';
        }else if (computerMove === 'Χαρτί'){
            result = 'Κέρδισες';
        }
    }else if(playerMove === 'Ψαλίδι'){
        if (computerMove === 'Πέτρα'){
            result = 'Έχασες';
        }else if (computerMove === 'Μολύβι'){
            result = 'Κέρδισες';
        }else if (computerMove === 'Ψαλίδι'){
            result = 'Ισοπαλία';
        }else if (computerMove === 'Χαρτί'){
            result = 'Κέρδισες';
        }
    }else if(playerMove === 'Χαρτί'){
        if (computerMove === 'Πέτρα'){
            result = 'Κέρδισες';
        }else if (computerMove === 'Μολύβι'){
            result = 'Έχασες';
        }else if (computerMove === 'Ψαλίδι'){
            result = 'Έχασες';
        }else if (computerMove === 'Χαρτί'){
            result = 'Ισοπαλία';
        }
    }

    if (result === 'Κέρδισες') {
        score.Νίκες +=1;
    }
    else if (result === 'Έχασες') {
        score.Ήττες +=1;
    }
    else if ( result === 'Ισοπαλία') {
        score.Ισοπαλίες +=1;
    }


    alert(`Διάλεξες ${playerMove}. Ο υπολογιστής διάλεξε ${computerMove}. ${result}` );
   
    document.getElementById("results").innerHTML = 
    `Νίκες: ${score.Νίκες},  Ισοπαλίες: ${score.Ισοπαλίες}, Νίκες Υπολογιστή: ${score.Ήττες} `
}


function pickComputerMove(){

    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber>=0 && randomNumber<=3/6)
    {
        computerMove = 'Πέτρα';
    }
    else if (randomNumber>3/6 && randomNumber<=4/6)
    {
        computerMove = 'Μολύβι';
    }
    else if (randomNumber>4/6 && randomNumber<=5/6)
    {
        computerMove = 'Ψαλίδι';
    }
    else if (randomNumber>5/6 && randomNumber<1)
    {
        computerMove = 'Χαρτί';
    }
        return computerMove;

}