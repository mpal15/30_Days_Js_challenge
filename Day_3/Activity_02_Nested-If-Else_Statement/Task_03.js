// Write a program to find the largest of three numbers using nested if-else statement.

var num_A = 12;
var num_B = 2;
var num_C = 42;

  if(num_A > num_B && num_A >num_C){
       console.log(`largest number is :${num_A}`);
  }else if(num_B >num_A && num_B >num_C){
      console.log(`largest number is :${num_B}`);
  }else{
    console.log(`largest number is :${num_C}`);
  }
