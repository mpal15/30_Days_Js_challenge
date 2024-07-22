// Use object destructing to extract the title and author from a book object and log them to  the console.

let book = {
    title:"rich dad and poor dad",
    author: "richard steve",
}

let { title , author } = book;

console.log(`book title :${title} and author name is ${author}`);