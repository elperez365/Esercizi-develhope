//Scrivere due funzioni, la prima funzione si chiamerà sayHelloName, 
// questa prenderà come parametro una callback che sarà la nostra seconda funzione di nome printName. 
// La nostra funzione printName dovra semplicemente fare un console.log() del nostro nome
//  (ricordiamoci che sarà la funzione di callback). 
//  La funzione sayHelloName, prende come parametro una callback, 
//  e dovrà prima fare un console.log() della stringa 'Hello' e dopo chiamare la funzione che prende come parametro.

 function sayhelloname (callback){
    setTimeout (function() {
     console.log ("hello")
        callback ()
    } , 600)
}

function printName (){
    console.log ("Mario")
}

sayhelloname (printName)