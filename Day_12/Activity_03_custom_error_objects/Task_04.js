// Create a custom erroe class that extends the built in error class.throw an instance of this custom error in a function and handles it using a try-catch block

class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}
function riskyFunction(){
    throw new CustomError("this is a custom error message");

}

function ErrorHandling(){
    try {
        riskyFunction()
    } catch (error) {
        if(error instanceof CustomError){
            console.error("caught a custom error",error.message);
        }else{
            console.error("Caught a custom error",error.message);
        }
    }
}

ErrorHandling();