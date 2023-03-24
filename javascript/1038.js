/**
 * [Array indexOf](https://oj.lidemy.com/problem/1038)
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
  const target = Number(lines[0]);
  const length = Number(lines[1]);
  let result = "-1";

  for (let i = length + 1; i >= 2; --i) {
    if (Number(lines[i]) === target) {
      result = i - 2;
    }
  }
  console.log(result);
}
