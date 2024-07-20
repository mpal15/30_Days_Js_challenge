//  using Object keys and obect values to console all keys and valuse of book objects

const book = {
    title:"the book of secret",
    author:"John Clerk",
    year:2009,
    
}


for (let key of Object.keys(book)) {
    console.log("key:",key);
  }
   for (let value of Object.values(book)) {
   console.log("value:",value);
  }