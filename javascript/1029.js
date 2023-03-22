/**
 * [加減乘除](https://oj.lidemy.com/problem/1029)
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

function calc(input) {
  const A = Number(input[0]);
  const B = Number(input[2]);
  const symbol = input[1];

  switch (symbol) {
    case "+":
      return A + B;
    case "-":
      return A - B;
    case "*":
      return A * B;
    case "/":
      return Math.floor(A / B);
  }
}

function solve(lines) {
  // 解題寫在這裡
  const input = lines[0].split(" ");
  const res = calc(input);
  console.log(res);
}
