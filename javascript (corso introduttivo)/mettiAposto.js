let arr1= [1,"a","r",56,"p",{_name:"luca",surname:"rossi",year:1955},{_name:"pippo",surname:"inzaghi",year:1988}]
let arr2= ["ciao","44",{_name :"rocco",surname:"biscotto",year:1999} ]

function mettiApposto (primo,secondo) {
    let arr3 =[]
    let arr4 =[]
    for (i of primo) {
        if (typeof(i) == "object") {
          arr3.push({i})
        } else arr4.push (i)
    }
    for (i of secondo) {
        if (typeof(i) != "object"){
            arr4.push(i)
        } else arr3.push({i})
    }
    console.log (arr3)
    console.log (arr4)
}
mettiApposto (arr1,arr2)