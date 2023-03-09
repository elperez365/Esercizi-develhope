const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
    ];
    let young = students[0]
    let surn = students[0]
    vai()
    students.forEach (ageMin,surnameL,)  
      console.log(" lo studente più giovane è " + young.name)
      console.log(" il cognome più lungo è " + surn.surname)
    function ageMin (student) {
     student.age < young.age ? young=student : "";
    }
    function surnameL (surname){
     surname.surname.length > surn.surname.length ? surn.surname = surname.surname : "";
     }
    function vai () {
         for (let i=0; i < students.length ;i++) {
            console.log (students[i].name);
            switch (students[i].hobby){
            case "gamer":
            console.log ("Life Is a Game, Play to Win!");
            break;
            case "sportsman":
            console.log ("Never give up!");
            break;
            case "photographer":
            console.log ("A picture is worth a thousand words!");
            break;
            }
            ageMin(students[i])
            surnameL (students[i])
          }
        }
    