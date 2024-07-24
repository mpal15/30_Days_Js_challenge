// write a function that validates user input and throws a custom error if the validation fails.Handle the custom error using a try-catch block

class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

function riskyFunction(){
    throw new CustomError("this is a custom error message");

}

function Stringcheck(str){
   try {
    if(str.length === 0){
        riskyFunction();
    }
    console.log("String is valid:",str);
   } catch (error) {
     console.error("warning..",error.message);
   }
}
Stringcheck("mohit");