/**
 * [完全平方和](https://oj.lidemy.com/problem/1031)
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

function solve(lines) {
  // 解題寫在這裡
  const input = Number(lines[0]);
  let result = 0;

  for (let i = 1; i <= input; i++) {
    const square = i * i;
    if (square < input) result += square;
  }

  console.log(result);
}
