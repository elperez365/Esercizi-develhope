function areaRettangolo(x,y) {
area = x * y;
console.log (area);
return area
}

function far (celsius) {
    let output= celsius * 9 / 5 + 32;
    return output;
};

function door(){
let isDoorClosed = true ;
let isDogOutside = false ;

if (isDogOutside == true) {console.log ("il cane è fuori")};
if (isDogOutside == false) {console.log ("il cane non è fuori")};
if (isDoorClosed == true) {console.log ("la porta è chiusa")};
if (isDoorClosed == false) {console.log ("la porta è aperta")};
}

function fullName(FirstName,LastName){
let FullName;
FullName = FirstName + "  " + LastName;
console.log (FullName);
return FullName
}

function eta (adn){
    const year= 2023;
  let output = year - adn
  return output

if (eta()>=18 && eta() < 80 ) {
    console.log ("puoi guidare")
} else if (eta() >=80) { 
    console.log( "puoi guidare se ancora ce la fai")
}else {
    console.log ("non puoi guidare")
}