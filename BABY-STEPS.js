// ## BABY STEPS(Exercise 2 of 13)

// Write a program that accepts one or more numbers as command - line arguments
// and prints the sum of those numbers to the console(stdout).
// for (let i = 2; i < process.argv.length; i++) {
//   console.log(process.argv[i]);

// }
function babySteps() {
  let sum = 0;
  for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
  }
  return sum;
}
console.log(babySteps(sum));
