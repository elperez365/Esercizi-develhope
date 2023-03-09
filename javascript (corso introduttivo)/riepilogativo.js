const students = [
    { id: 1, _name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
    { id: 2, _name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman"},
    { id: 5, _name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'},
    { id: 3, _name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer"},
    { id: 4, _name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer"},
    ];
let etaMinore = 0
let cognomeLungo = 0 

function primaParteEsercizio() {
    
    for (i=0 ; students[i] != undefined; i++ ){
    
     console.log (students[i]._name)

     if (students[i].hobby  == "gamer"){
        console.log ("Life Is a Game, Play to Win!")
    } if (students[i].hobby == "sportsman") {
        console.log ("Never give up!")
    } if (students[i].hobby == "photographer") {
        console.log ("A picture is worth a thousand words!")
    } 
  }
}

function etaM (){
     for (i=1 ; students[i] != undefined; i++ ){
      if (students[i].age < students[i-1].age) {
       etaMinore=students[i].age
    }
  }
     for (i=0 ; students[i] != undefined; i++ ){
      if (students[i].age == etaMinore) {
     console.log ("il piu giovane è  " + students[i]._name)  
    }
  }
}

function cognomeL() {
     for (i=1 ; students[i] != undefined; i++ ){
        if (students[i].surname.length > students[i-1].surname.length ) {
        cognomeLungo = students[i].surname.length
    }
}    for (i=0 ; students[i] != undefined; i++ ){   
     if (students[i].surname.length == cognomeLungo){
       console.log ("il cognome piu lungo è  " + students[i].surname )
     }
   } 
}
 
primaParteEsercizio()
etaM ()
cognomeL()





