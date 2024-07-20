// access the library object name and books titile then console the result.
const library = {
    name:"Source of knowledge",
    books:[
        {
           title:"computer network",
        },
        {
           title:"database",
        },
        {
           title:"operating system",
        },
    ]
}
console.log(`library name is ${library.name}  and books title is ${library.books.map((book) => book.title)}`);