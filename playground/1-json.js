const fs = require('fs');
// const book = {
//     title: 'ASOIAF',
//     author: 'GRRM'
// };
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseBook = JSON.parse(bookJSON);
// console.log(parseBook.title);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
var old = JSON.parse(dataJSON);
old.name = 'Vincent';
old.age = 20;


const updatedJSON = JSON.stringify(old);
fs.writeFileSync('1-json.json', updatedJSON);



