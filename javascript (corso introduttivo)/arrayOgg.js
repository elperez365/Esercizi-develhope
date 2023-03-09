let arr = [ 
    {id:1,_name:"andrea",city:"ariccia",pass:"ok1994"},
    {id:2,_name:"rocco",city :"roma",pass:"okkkkkk"},
    {id:3,_name:"michele",city:"palermo",pass:"1994aaaa"},
    {id:4,_name:"pippo",city:"catania",pass:"aaaa1aaaa"},
    {id:6,_name:"asino2",city:"isola del giglio",pass: "-" },
    {id:5,_name:"asinello",city:"isola del giglio",pass:"111111"},
]
for (user of arr) {
    let numero = 0
    let lettera = 0
    for (char of user.pass){   
        if       (     (String(Number(char)))    ===      "NaN"    ) {
         lettera = lettera + 1
        } else     {numero   =     numero+1      }
        if ( numero > 0 && lettera > 0){
            user.valid = true
          } else {user.valid =false} 
    }       
} 
console.log (arr)


 
     

