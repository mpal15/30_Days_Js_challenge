// In Array, use reduce to sum the all element of array and console the result

const my_Array = [1,2,3,4,5,6,7,8];

 const sum  = my_Array.reduce((item,acc)=>{
    return item+acc;
 });

 console.log(sum);