let primitive = "ciao";

switch (typeof primitive) {
    case "string" :
        console.log("è una stringa");
        break;
    case "number" :
        console.log ("è un numero");
        break;
    case "boolean" :
        console.log ("è un buleano");
        break;
    default:
        console.log ("valore non valido");
 }





// if (typeof primitive === "string") {
//     console.log ("è una stringa")
// } else if (typeof primitive === "number"){
//     console.log ("è un numero")
// } else if (typeof primitive === "boolean") {
//     console.log ("è un buleano")
// } else console.log ("valore non valido")


// typeof primitive  === "String" ? console.log("questa è una stringa"): typeof primitive === "Number" ?
//  console.log ("questo è un numero"): typeof primitive === "Boolean" ?
//   console.log ("questo è un buleano") : console.log ("valore non valido");
