// find the specific number in matrix and console the element with indexes


let myArray = [
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
    ];



    function find_Element(myArray, element){
    
    for(let i=0;i<myArray.length;i++){
        for(let j=0;j<myArray[0].length;j++){
            if(myArray[i][j]==element){
                console.log(`finding element at index ${i},${j} is :`+ myArray[i][j]);
            }
        }
    }
}

find_Element(myArray,7);