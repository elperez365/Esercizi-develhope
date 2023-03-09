let arr = [ "a", "b", "c", "d", "e", "f", "g", "h"];
let appoggio
let appoggio2
function change (pos1,pos2) {
    for (i=0 ; i < arr.length; i++ ){
    if (arr[i] == arr[pos1]) {
      appoggio = arr[pos1];  
    } else if (arr[i] == arr[pos2]){
        appoggio2= arr[pos2];
    }
};
    arr[pos1]= appoggio2;
    arr[pos2] = appoggio;
    console.log (arr)
}
change (3,5)