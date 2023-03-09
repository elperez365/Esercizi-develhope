const year= 2023;
let adn=2022
function eta () {
  let output = year - adn
  return output
}

if (eta()>=18 && eta() < 80 ) {
    console.log ("puoi guidare")
} else if (eta() >=80) { 
    console.log( "puoi guidare se ancora ce la fai")
}else {
    console.log ("non puoi guidare")
}