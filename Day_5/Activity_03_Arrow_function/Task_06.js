// Write a  arrow function to check the string has contain specific ch and return boolean value

const boolean = (str,ch) =>{
    for(let i=0;i<str.length;i++){
        if(str[i]=== ch){
            return true;
        }
    }
    return false
}

result = boolean("mohit",'h');
console.log(result);