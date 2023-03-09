function minimumValue (numbersArray){
    let min
    let max =0
    for (let i=0 ; i< numbersArray.length; i++){
     if (numbersArray [i]> max){
        max =numbersArray [i]
    }
}
min = max
    
    for (let i=0 ; i< numbersArray.length; i++) {
        if (numbersArray [i] < min) {
            min = numbersArray [i]
        }
    }
if (min >= 0){
    console.log (min);
    }else {console.log(0)}

}

minimumValue ([21,-4,5,1,9,5,0,-3])