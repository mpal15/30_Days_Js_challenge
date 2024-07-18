// In Array, use filter the element who is even and console the updated array

const my_Array = [1,2,3,4,5,6,7,8,9,10];


const new_Array  = my_Array.filter((item) =>{ 
    if(item % 2 == 0)
        return item;
})

console.log(new_Array);