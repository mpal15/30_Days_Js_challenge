// Create a function that divide two number and throw an error if the denominator is zero, Use a try-catch block to handle this error
function divide(num1,num2){
  try {
     if(num2 ==0){
        throw new Error("denominator is zero so it not divide")
     }
     const div =num1/num2;
     console.log("division is:",div);
  } catch (error) {
    console.log("error:",error);
  }
}

divide(2,3)