//  Write a function that intentionally throwa an error and use a try-catch block to handle the error and log an appropriate message to the console

function throwError(){
    throw new Error("This is an intentional error");
}

function handleError(){
    try {
       throwError();
    } catch (error) {
        console.log("Warring..",error);
    }

}

handleError();