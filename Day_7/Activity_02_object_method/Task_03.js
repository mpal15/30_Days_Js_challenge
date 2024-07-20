// create function in book  to return a string of book title and auther and console the result for calling function

const book = {
    title:"the book of secret",
    author:"John Clerk",
    year:2009,
    bookDetails: function(){
        return ` book title ${book.title} and author is ${book.author}`;
    }
}
console.log(book.bookDetails());