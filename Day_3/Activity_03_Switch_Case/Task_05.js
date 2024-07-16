// Write a program to uses switch case to assign a grade(A,B,C,D,F) based on score give and console the result.


var num = 21;

switch (true) {
    case (num>=81 && num<=100):
         console.log("Grade assign to student is A");
        break;
    case (num>=61 && num<=80):
         console.log("Grade assign to student is B");
        break;
    case (num>=41 && num<=60):
         console.log("Grade assign to student is C");
        break;
    case (num>=21 && num<=40):
         console.log("Grade assign to student is D");
        break;
    case (num>=0 && num<=20):
         console.log("Grade assign to student is F");
        break;

    default:
        console.log("Grade is not assign to student");
        break;
}