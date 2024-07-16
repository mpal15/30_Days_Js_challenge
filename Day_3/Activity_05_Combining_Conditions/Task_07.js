// Write a program to check if the year is leap year using multiple conditions (divide by 4,but not 100 unless also divided by 400)

var year  = 2016;
if(year %4==0){
    console.log(`year is leap year${year}`)
}else if( year%100!=0 && year%400 == 0){
    console.log(`year is leap year ${year}`);
}else{
    console.log(`year is not leap year ${year}`);
}