const book = {
    title: 'The Stranger',
    author: 'Albert Camus'
}

//string json object
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//json object parse
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)