let distributore = {
    monete: 0,
    bibite: 15
}

function insertCoin(coins) {
    distributore.monete = distributore.monete + coins;
    distributore.bibite = distributore.bibite - coins;
    console.log(distributore)
    if(distributore.bibite <= 0) {
        let resto = 0;
    do {
        distributore.bibite++;
        distributore.monete--;
        resto++;
    } while (distributore.bibite < 0)
    // distributore.monete = distributore.monete - coins;
    // distributore.bibite = distributore.bibite + coins;
    console.log("Ti ho restituito " + resto + " monete")
    } 
    console.log(distributore)
}

insertCoin(10);