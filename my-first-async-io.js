// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
//   (stdout), similar to running cat file | wc - l.

// The full path to the file to read will be provided as the first
// command - line argument.

const fs = require('fs');
var str = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err)
    throw err;
  const lines = data.split('\n');
  console.log(lines.length - 1);
})

