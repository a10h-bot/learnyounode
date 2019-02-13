const fs = require('fs');

// fs.writeFile('myFile.txt', 'Hello! my new file again', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('File created successfully');
// })

// fs.appendFile('myFile.text', '2nd line added in this file', function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log('myFile content modifide');

// })

// fs.readFile('myhtmlfile.html', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// })

// fs.rename('myfile.html', 'myfile1.html', (err) => {
//   if (err) throw err;
//   console.log('File has been succesfully renamed');
//   fs.unlink('myfile1.html', (err) => {
//     if (err) throw err;
//     console.log('file successfully deleted');
//   })

// })

const buf = Buffer.allocUnsafe(10);
buf.write('welcome', 2, 5, 'utf8')

console.log(buf);
console.log(buf.values());
const buf1 = Buffer.from('Welcome to my world');
console.log(buf1.length);
