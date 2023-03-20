/**
 * [判斷質數](https://oj.lidemy.com/problem/1020)
 * Difficulty:Low
 *
 * 解答用 console.log 寫出來。
 *
 */

var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solve(lines) {
  // 解題寫在這裡
  const length = lines[0];

  for (let i = 1; i <= length; i++) {
    if (isPrime(Number(lines[i]))) {
      console.log("Prime");
    } else {
      console.log("Composite");
    }
  }
}
