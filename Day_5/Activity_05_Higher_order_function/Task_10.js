
// Write a hogher order function to take two functions and value,applies first function to value then second function to result

function higherorder(my_fun_1,my_fun_2,value){
  
    let result = my_fun_1(value);
    my_fun_2(result);
}

function my_fun_1(value){
    console.log(`value is ${value}`);
    return value**2;
}
function my_fun_2(result){
    console.log(`final result is ${result}`);
}
higherorder(my_fun_1,my_fun_2,6);