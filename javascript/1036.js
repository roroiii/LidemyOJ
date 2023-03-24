/**
 * [Array reverse](https://oj.lidemy.com/problem/1036)
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

  const length = Number(lines[0]);

  for (let i = length; i >= 1; i--) {
    console.log(lines[i]);
  }
}
