// write a function in book object  and using this keyword to return a string as book title and auther then console the result of calling function
const book = {
    title:"the book of secret",
    author:"John Clerk",
    year:2009,
    bookDetails: function(){
        return ` book title ${this.title} and author is ${this.author}`;
    }
}
console.log(book.bookDetails());