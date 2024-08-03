import lodesh from 'lodash';

const numbers = [1,2,3,4,5,6,7];

const doubled = lodesh.map(numbers,(num)=>num*2);
console.log("doubles numbers is:",doubled);