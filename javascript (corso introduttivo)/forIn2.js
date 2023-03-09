
const pippo = {
    adn : 1990,
    eta : ""
}

function eta (year) {
    output = (year - pippo.adn)
    pippo.eta=output
    if (pippo.eta >=80 ){
        pippo.eta = "dead"
        console.log ("pippo è morto" , pippo)
    }else {
    console.log ( "pippo è vivo"  , pippo)
    }
    
}



eta (2220)