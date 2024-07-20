// create a function in book object to update the year properites of object and console the updated object
const book = {
    title:"the book of secret",
    author:"John Clerk",
    year:2009,
    UpdatebookDetails: function(year){
       this.year = year;
    }
}
book.UpdatebookDetails(2023);
console.log(book);