
function Sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function substraction(a,b){
    if(a>b){
        return a-b;
    }
    return b-a;
}

function divide(a,b){
    if(b==0){
        return "not divide";
    }
    return a/b;
}

export { Sum , multiply,substraction,divide};