// using for ..in loop to console the kesy in books
const book = {
    title:"the book of secret",
    author:"John Clerk",
    year:2009,
   
}
for (const key in book) {
   console.log(`book.${key} : ${book[key]}`);
}